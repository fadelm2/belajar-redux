import axios from "axios";
import {updateStart, updateSuccess, updateFailure} from "./userSlice"

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.post("http://localhost:8000/api/users/12/update", user);
        dispatch(updateSuccess(res.data))
    } catch (err) {
        dispatch(updateFailure());
    }
};