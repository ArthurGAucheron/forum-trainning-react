import {configureStore} from "@reduxjs/toolkit";
import postReducer from './post-slice';
export const store = configureStore({
    reducer : {
        post : postReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
