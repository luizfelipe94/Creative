import { QuestionsReducer } from "./questionsReducer";
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    questionsState: QuestionsReducer
});