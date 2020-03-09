import React, { Component } from 'react';
import { Select, Button, Icon, Card, Input, Upload, Row } from 'antd';
import { connect } from 'react-redux';

import { addNewNote } from "../../actions/index.js"
class NotePad extends Component {

    state = {
        visible: false,
        isNoteWriterOpen: false,
        noteTitle: "",
        noteDescription: "",
        noteLabel: "",
        noteBgcolor: "gray",
        noteLabel: "normal"
    };

    showDrawer = () => {
        this.setState({
            visible: true,
            showNotepad: false,
            noteTitle: "",
            noteDescription: "",
            noteLabel: "",
            noteBgcolor: "gray",
            noteLabel: "normal",

        });
    };

    addNote = (e) => {
        let vm = this.state;
        let noteObj = {
            label: vm.noteLabel,
            bgcolor: vm.noteBgcolor,
            title: vm.noteTitle,
            note: vm.noteDescription
        }

        if (vm.noteDescription || vm.noteTitle) {
            this.props.addNewNote(noteObj);

            this.setState({
                noteTitle: "",
                noteDescription: "",
                noteLabel: "",
                noteBgcolor: "gray",
                noteLabel: "normal"
            })

        }
    }
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    noteColor = (color) => {
        this.setState({
            noteBgcolor: color
        })
    }

    render() {
        const { TextArea } = Input;
        const { Option } = Select;

        return (
            <div style={{
                width: "76%",
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "12%",


            }} >

                <Card
                    style={{
                        border: "1px solid #e8e8e8",
                        borderRadius: "18px",
                        boxShadow: "2px 3px 8px grey",
                    }}>

                    <Input size="large" placeholder="Title"
                        style={{
                            background: this.state.noteBgcolor
                        }}
                        value={this.state.noteTitle}
                        onClick={e => this.setState({ showNotepad: true })}
                        onChange={e => this.setState({ noteTitle: e.target.value })}

                    />

                    {!this.state.showNotepad ? "" :
                        <div>
                            <TextArea
                                style={{
                                    background: this.state.noteBgcolor
                                }}
                                value={this.state.noteDescription}
                                onChange={e => this.setState({ noteDescription: e.target.value })}
                                placeholder="take a note..."
                                autoSize={{ minRows: 3, maxRows: 5 }}
                            />
                            <br />
                            <div style={{ marginTop: "5px", float: "right" }}>
                                <Row>
                                    <Select defaultValue="red" style={{ width: 120 }}
                                        onChange={color => this.noteColor(color)}>
                                        <Option value="black">black</Option>
                                        <Option value="red">red</Option>
                                        <Option value="yellow">yellow</Option>
                                        <Option value="pink">pink</Option>
                                        <Option value="blue">blue</Option>
                                        <Option value="green" > green</Option>
                                        <Option value="purple" > purple</Option>
                                        <Option value="orange" > orange</Option>
                                        <Option value="brown" > brown</Option>

                                    </Select>
                                    <Button style={{ marginLeft: "10px" }} type="primary" onClick={e => this.addNote(e)}>Add Note</Button>

                                </Row>
                            </div>

                        </div>
                    }
                </Card>


            </div >);
    }
}


// map state to props
const mapStateToProps = ({ auth, notes }) => {
    // const { user } = authUser;
    return {
        auth,
        allNotes: notes.allNotes
        // name : readuxAuthreturnName
    };
};

export default connect(mapStateToProps, {
    addNewNote
})(NotePad);
