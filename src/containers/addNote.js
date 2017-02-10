import addNoteForm from '../components/AddNoteForm'
import { connect } from 'react-redux'
import { addNote } from '../actions'



const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (note) => {
            dispatch(addNote(note))
        }
    }
}

export default connect(null, mapDispatchToProps)(addNoteForm);