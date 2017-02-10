import React, {PropTypes ,Component} from 'react';


export default class AddNoteForm extends Component{
    //constructor(props) {
    //    super(props);
    //}

    render() {
        console.log(this.props.notes);
        const noteItems = this.props.notes.map((note, index) =>
                // Only do this if items have no stable IDs
                <li key={index}>
                    {note}
                </li>
        );
        return <div>
            <ul>{noteItems}</ul>
        </div>
    }
}

AddNoteForm.propTypes = {
    notes: PropTypes.array.isRequired
}
