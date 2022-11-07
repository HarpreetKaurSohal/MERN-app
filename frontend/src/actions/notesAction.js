import axios from "axios";
import {
  NOTES_LIST_FAIL,
  NOTES_LIST_REQUEST,
  NOTES_LIST_SUCCESS,
} from "../constants/notesContants";

export const listNotes = () => async (dispatch, getState) => {
  try {
    dispatch({ type: NOTES_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        // Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };

    const { data } = await axios.get("/api/notes", config);

    dispatch({ type: NOTES_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.register.data.message
        : error.message;
    dispatch({ type: NOTES_LIST_FAIL, payload: message });
  }
};
