export default function userstate(state = [], action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                action.note
            ];
        case 'FETCH_NOTES_SUCCESS':
            return action.notes;
        case 'DELETE_NOTE':
            console.log(action);
            const noteId = action.note.noteid;
            console.log(noteId);
            console.log(state);
            return state.filter(notes => notes.noteid !== noteId);
        default :
            return state;
    }
}