import { createSlice } from "@reduxjs/toolkit"

// export const userSlice = createSlice({
//    name : "user",
//    initialState : {
//        name : "anna",
//        email : "john@email.com"
//    },
//     reducers : {
//        update : (state, action) => {
//            state.name = action.payload.name;
//            state.email = action.payload.email
//        },
//         remove : (state) => (state={}),
//         addHello :(state, action) =>{
//            state.name = "Hello " + action.payload.name;
//         }
//     }
// });


export const userSlice = createSlice({
    name : "user",
    initialState : {
        userInfo : {
            name : "anna",
            email : "john@email.com"
        },
        pending : false,
        error: false,
    },
    reducers : {
        updateStart : (state, action) => {
            state.pending= true
        },
      updateSuccess: (state,action) => {
            state.pending = false;
            state.userInfo = action.payload;
      },
        updateFailure: (state) =>{
            state.pending = false;
            state.error = true;
        }
    }
});

export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;
export default userSlice.reducer;