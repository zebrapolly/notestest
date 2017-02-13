import { connect } from 'react-redux'
import NotesList from '../components/NotesList.js'
import { deleteNote, GetNotes, editNote } from '../actions'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (note) => {
            dispatch(deleteNote(note))
        },
        onGetNotes: () => {
            dispatch(GetNotes());
        },
        submitEditForm: (note) =>{
            dispatch(editNote(note))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesList);