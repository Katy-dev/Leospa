import { createSlice } from '@reduxjs/toolkit';

const localStorageUser = localStorage.getItem('user');


const changeUserLocalStorage = (key, value) => {
    const data = JSON.parse(localStorage.user);
    for (let keyData in data) {
        if (keyData === key) {
            data[keyData] = value;
            break;
        }
    }
    localStorage.setItem('user', JSON.stringify(data));
};


const initialState = {
    user: null,
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getFeedbacksUser: (state, action) => {
            state.users = action.payload;
            state.loading = true;
            state.error = false;
        },
        createFeedbackUser: (state, action) => {

            localStorage.setItem('user', JSON.stringify(state));
        },
        setUserPhoto:(state, action) => {
            changeUserLocalStorage('photo', action.payload.photo);
            return {
                ...state,
                photo: action.payload.photo,
            };
        },
    },
});

export const {
    getFeedbacksUser,
    createFeedbackUser,
    setUserPhoto,
} = userSlice.actions;

export default userSlice.reducer;
