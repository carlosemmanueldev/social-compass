import {createSlice} from "@reduxjs/toolkit";
import {configBearerToken} from "../api/auth";

const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        "userId": "",
        "token": "",
        "isLoggedIn": false,
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.isLoggedIn = true;
            configBearerToken(action.payload.token);
            localStorage.setItem('userId', action.payload.userId);
            localStorage.setItem('token', action.payload.token);
        },
        logout: (state) => {
            state.token = "";
            state.userId = "";
            state.isLoggedIn = false;
            configBearerToken("");
            localStorage.removeItem('userId');
            localStorage.removeItem('token');
        },
    }
});

export const sessionActions = sessionSlice.actions;

export default sessionSlice.reducer;

export interface SessionState {
    session: {
        userId: string,
        token: string,
        isLoggedIn: boolean,
    };
}
