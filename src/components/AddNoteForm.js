import React, {Component} from 'react';

export default class AddNoteForm extends Component{
    constructor(props) {
        super(props);
        this.submitHandle = this.submitHandle.bind(this);
    }
    submitHandle(e){
        e.preventDefault();
        console.log(this.noteInput.value);
        this.props.submitForm(this.noteInput.value);
        this.noteInput.value = ''
    }
    render() {
        return <div>
            <form onSubmit={this.submitHandle}>
                <h2> Form to add Notes </h2>
                <input ref={(input) => {this.noteInput = input}}/>
                <button type="onSubmit">Add Note</button>
            </form>
            </div>
    }
}