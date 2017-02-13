export default function userstate(state = [], action) {
    //console.log(action);
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                action.note
            ];
        case 'FETCH_NOTES_SUCCESS':
            return action.notes;
        case 'DELETE_NOTE':
            const noteId = action.note.noteid;
            return state.filter(notes => notes.noteid !== noteId);
        case 'UPDATE_NOTE':
            return state.map( (item, index) => {
                if (item.noteid !== action.note.noteid) {
                    return item;
                }
                return {
                    ...item,
                    ...action.note
            }
    });
        default :
            return state;
    }
}