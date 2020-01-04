import { ADD_QUESTION, REMOVE_QUESTION } from "../actions/actionTypes";

const initialState = {
    questions: []
};

export const QuestionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            state.questions.push(action.payload);
            return state;
        case REMOVE_QUESTION:
            state.questions.pop(action.payload);
            return state;
        default:
            return state;
    }
}