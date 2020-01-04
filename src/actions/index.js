import { ADD_QUESTION } from "./actionTypes";

export const addQuestion = question => ({
    type: ADD_QUESTION,
    payload: question
});