import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import userSlice from "./redusers/feedbackReducer";

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    trunk: true,
})

export default configureStore({
    reducer: {
        user: userSlice,
    },
    middleware,
    devTools: true,
});