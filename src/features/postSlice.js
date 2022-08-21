import { createSlice } from "@reduxjs/toolkit";
import * as types from "./types/postTypes";

const initialState = {
    isLoading: false,
    posts: [],
}

export const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SET_LOADING:
            state = { ...state, isLoading: payload };
            return state;
        case types.ADD_POST:
            state = { ...state, posts:[...state.posts, payload] };
            return state;
        case types.ADD_COMMENT:
            const findPost = state.posts.find(p => p.postId === payload.postId);
            const comments = findPost.comments;
            comments.push(payload.comment);
            findPost.comments = comments;
            
            state = { ...state, posts: state.posts.map(p => p.postId === payload.postId ? findPost : p ) }
            return state;
        default:
            return state;
    }
}

export default postReducer;