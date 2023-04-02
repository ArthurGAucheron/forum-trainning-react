import {createSlice} from "@reduxjs/toolkit";
import {MOCK_POSTS} from "../Posts/post-list-mock";

const postSlice = createSlice(
    {
        name : "post",
        initialState : MOCK_POSTS,
        reducers : {
            remove(state,action){
                const index = state.findIndex( post => post.id === action.payload);
                state.splice(index,1);
            },
            removeAll(state){
                state.splice(0,state.length);
            },
            vote(state,action){
                const index = state.findIndex(post => post.id === action.payload);
                state[index].voteCount ++;
            },
            unVote(state,action){
                const index = state.findIndex(post => post.id === action.payload);
                state[index].voteCount --;
            }
        }
    }
);

export const {remove,removeAll,vote,unVote} = postSlice.actions;
export default postSlice.reducer;
