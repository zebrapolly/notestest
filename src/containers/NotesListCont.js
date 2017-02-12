import { connect } from 'react-redux'
import NotesList from '../components/NotesList.js'
import { deleteNote } from '../actions'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (note) => {
            dispatch(deleteNote(note))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesList);