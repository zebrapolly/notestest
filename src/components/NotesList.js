import React, {PropTypes ,Component} from 'react';
import { Col, Grid, Button, Accordion, Panel, Modal, FormGroup, FormControl} from 'react-bootstrap';


export default class AddNoteForm extends Component{
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.deleteHandle = this.deleteHandle.bind(this);
        this.editFormHandle = this.editFormHandle.bind(this);
        this.state = {showModal: false};
    }

    getInitialState() {
        return { showModal: false };
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    openModal() {
        this.setState({ showModal: true });
    }

    componentWillMount() {
        this.props.onGetNotes()
    }

    deleteHandle(note) {
        this.props.deleteNote(note);
    }

    editFormHandle(note) {
        //console.log(note)
        //console.log({title: this.noteInputTitle.value, text: this.noteInputText.value , noteid: note.noteid})
        this.props.submitEditForm({title: this.noteInputTitle.value, text: this.noteInputText.value, noteid: note.noteid});
        this.closeModal();
    }
    render() {
        const noteItems = this.props.notes.map((note, index) =>
                <Panel header={note.title} key={index} eventKey={index}>
                    <p className="note-text">{note.text}</p>
                    <p className="note-text">{note.noteid}</p>
                    <Button bsSize="small" bsStyle="danger" onClick={() => this.deleteHandle(note)}>Delete note</Button>
                    <Button bsSize="small" bsStyle="info" onClick={this.openModal}>Edit note</Button>

                    <Modal show={this.state.showModal} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Editing note</Modal.Title>
                        </Modal.Header>
                            <Modal.Body>
                            <form>
                                <FormGroup>
                                    <FormControl
                                        type="text"
                                        inputRef={(input) => {this.noteInputTitle = input}}
                                        defaultValue={note.title}
                                        />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl
                                        type="text"
                                        inputRef={(input) => {this.noteInputText = input}}
                                        defaultValue={note.text}
                                        />
                                </FormGroup>
                                <Button bsStyle="danger" onClick={() => this.editFormHandle(note)}>Save</Button>
                                <Button onClick={this.closeModal}>Close</Button>
                            </form>
                        </Modal.Body>
                    </Modal>
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
