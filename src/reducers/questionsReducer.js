const initialState = {
    answredQty: 0,
};

export const QuestionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'next':
            return {
                ...state,
                newValue: action.newValue
            };
        case 'finish':
            return {
                ...state,
                newValue: action.newValue
            }
        default:
            return state;
    }
}