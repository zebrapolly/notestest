import React, {PropTypes ,Component} from 'react';


export default class AddNoteForm extends Component{

    render() {
        console.log(this.props.notes);
        const noteItems = this.props.notes.map((note, index) =>
                <li key={index}>
                    <div>{note.title}</div>
                    <div>{note.text}</div>
                </li>
        );
        return <div>
            <h2>Notes List</h2>
            <ul>{noteItems}</ul>
        </div>
    }
}

AddNoteForm.propTypes = {
    notes: PropTypes.array.isRequired
}
