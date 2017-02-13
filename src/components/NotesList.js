import React, {PropTypes ,Component} from 'react';
import { Col, Grid, Button, Accordion, Panel} from 'react-bootstrap';


export default class AddNoteForm extends Component{
    constructor(props) {
        super(props);
        this.deleteHandle = this.deleteHandle.bind(this);
    }



    deleteHandle(note){
        this.props.deleteNote(note);
    }
    render() {
        const noteItems = this.props.notes.map((note, index) =>
                <Panel header={note.title} key={index} eventKey={index}>
                    <p className="note-text">{note.text}</p>
                    <p className="note-text">{note.noteid}</p>
                    <Button bsSize="small" bsStyle="danger" onClick={() => this.deleteHandle(note)}>Delete note</Button>
                    <Button bsSize="small" bsStyle="info">Edit note</Button>
                </Panel>
        );
        return <Grid>
            <h3 className="text-center">Notes List</h3>
            <Col lg={8} lgPush={2}>
                <Accordion>
                    {noteItems}
                </Accordion>
            </Col>
        </Grid>
    }
}

AddNoteForm.propTypes = {
    notes: PropTypes.array.isRequired
}
