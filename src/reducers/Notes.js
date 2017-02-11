export default function userstate(state = [], action) {
    if (action.type === 'ADD_NOTE'){
        return [
            ...state,
            action.note
        ];
    } else if (action.type === 'FETCH_NOTES_SUCCESS') {
        return action.notes;
    }

    return state;
}