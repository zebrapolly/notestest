import { connect } from 'react-redux'
import NotesList from '../components/NotesList.js'

const mapStateToProps = (state) => {
    return state

}

export default connect(
    mapStateToProps,
    null
)(NotesList);