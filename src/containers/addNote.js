import addNoteForm from '../components/AddNoteForm'
import { connect } from 'react-redux'
import { addNote } from '../actions'



const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (text) => {
            dispatch(addNote(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(addNoteForm);