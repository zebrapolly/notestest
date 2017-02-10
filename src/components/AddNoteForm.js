import React, {Component} from 'react';

export default class AddNoteForm extends Component{
    constructor(props) {
        super(props);
        this.submitHandle = this.submitHandle.bind(this);
    }
    submitHandle(e){
        e.preventDefault();
        this.props.submitForm({title: this.noteInputTitle.value, text: this.noteInputText.value});
        this.noteInputTitle.value = ''
        this.noteInputText.value = ''
    }
    render() {
        return <div>
            <form onSubmit={this.submitHandle}>
                <h2> Form to add Notes </h2>
                <input ref={(input) => {this.noteInputTitle = input}}/>
                <input ref={(input) => {this.noteInputText = input}}/>
                <button type="onSubmit">Add Note</button>
            </form>
            </div>
    }
}