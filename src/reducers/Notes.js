const initialState = ['first note', 'second note'];

export default function userstate(state = initialState, action) {
    if (action.type === 'ADD_NOTE'){
        return [
            ...state,
            action.text
        ];
    }
    return state;
}