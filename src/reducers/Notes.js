export default function userstate(state = [], action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                {
                    title: action.note.title,
                    text: action.note.text,
                    id: +(new Date())
                }
            ];
        case 'FETCH_NOTES_SUCCESS':
            return action.notes;
        case 'DELETE_NOTE':
            console.log(action);
            const noteId = action.note.id;
            console.log(noteId);
            console.log(state);
            return state.filter(notes => notes.id !== noteId);
        default :
            return state;
    }
}