import { NEXT_QUESTION, FINISH } from "./actionTypes";

export const nextQuestion = value => ({
    type: NEXT_QUESTION,
    newValue: value
});

export const finish = value => ({
    type: FINISH,
    newValue: value
});