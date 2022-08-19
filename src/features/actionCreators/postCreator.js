import { storage, db } from "../../firebase";
import * as types from "../types/postTypes";

const setLoading = data => ({
    type: types.SET_LOADING,
    payload: data,
});

const addPost = data => ({
    type: types.ADD_POST,
    payload: data,
});

export const doPost = (data, image, setProgress) => dispatch => {
    db.collection("posts").add(data).then(async res => {
        const document = await res.get();
        const postData = {data: document.data(), id: document.id};
        const uploadRef = storage.ref(`posts/${document.id}`);

        uploadRef.put(image).on("state_change", (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes * 100));
            setProgress(progress);
        }, (err) => {
            console.log(err);
        }, async () => {
            const url = await uploadRef.getDownloadURL();
            db.collection("posts").doc(document.id).update({
                image: url
            }).then(() => {
                postData.data.image = url;
                dispatch(addPost(postData));
                alert("post created!");
            }).catch((err) => {
                console.log(err);
            });
        });
    }).catch((err) => {
        console.log(err);
    });

}