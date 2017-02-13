import React, {Component} from 'react';
import { Col, Grid, Button, FormControl, FormGroup} from 'react-bootstrap';


export default class AddNoteForm extends Component{
    constructor(props) {
        super(props);
        this.submitHandle = this.submitHandle.bind(this);
    }
    submitHandle(e){
        e.preventDefault();
        this.props.submitForm({title: this.noteInputTitle.value, text: this.noteInputText.value, noteid: +(new Date())});
        this.noteInputTitle.value = ''
        this.noteInputText.value = ''
    }
    render() {
        return <Grid className="addNoteForm">
            <Col lg={6} lgPush={3}>
                <h3> Form to add Notes </h3>
                <form onSubmit={this.submitHandle}>
                    <FormGroup>
                        <FormControl
                            type="text"
                            inputRef={(input) => {this.noteInputTitle = input}}
                            placeholder="Enter title"
                            />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            type="text"
                            inputRef={(input) => {this.noteInputText = input}}
                            placeholder="Enter text"
                            />
                    </FormGroup>
                        <Button type="submit">Add Note</Button>

                </form>
            </Col>
        </Grid>

    }
}