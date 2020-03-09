import React, { Component } from 'react';
import { Card, Row, Col, Popover, Icon, Empty, Tag } from 'antd';
import { connect } from 'react-redux';

import { deleteOldNote } from "../../actions/index.js";

class AllNotes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            allNotes: [],
            visibleMenu: false
        }
    }

    onClickNoteMenu = (e) => {
        console.log(e);
    }

    hideNoteMenu = () => {
        this.setState({
            visible: false,
        });
    };

    deleteNote = (noteObj, i) => {
        this.props.deleteOldNote(i);
    }

    handleVisibleChange = visible => {
        this.setState({ visible });
    };

    showUserNotes = (e) => {
        let dispNoteList = <Empty />;
        let myList = this.props.allNotes;

        dispNoteList = myList && myList.map((noteEle, index) => {
            // let tagNamesList = noteEle.labels && noteEle.lables.map((name) => {
            //     return <Tag color="geekblue">{name}</Tag>
            // });

            return (
                <Col span={5} >
                    <Card title={noteEle.title}
                        bordered={true}
                        key={noteEle.title + noteEle.index}
                        style={{
                            background: noteEle.bgcolor,
                            border: "1px solid #e8e8e8",
                            borderRadius: "12px",
                            boxShadow: "1px 1px 0px grey",
                            margin: "5px"
                        }}
                    >
                        {noteEle.note}
                        <br />
                        {/* {<Tag color="geekblue">{noteEle.lables[0]}</Tag>} */}
                        <Icon type="delete" onClick={e => this.deleteNote(noteEle, index)} />
                        <hr />
                    </Card>
                </Col>
            )

        })

        return dispNoteList

    }

    render() {
        return (
            <div style={{ marginTop: "10px" }}>
                <Row >
                    {this.showUserNotes()}
                </Row>
            </div>
        );
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
    deleteOldNote
})(AllNotes);
