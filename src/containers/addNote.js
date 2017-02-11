import addNoteForm from '../components/AddNoteForm'
import { connect } from 'react-redux'
import { addNote, GetNotes } from '../actions'


const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (note) => {
            dispatch(addNote(note))
        },
        onGetNotes: () => {
            console.log('onGetNotes');
            dispatch(GetNotes());
        }
    }
}

export default connect(null, mapDispatchToProps)(addNoteForm);