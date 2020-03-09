import React, { Component } from 'react';

import Notepad from "../../components//Notepad/notepad.js"
import AllNotes from "./allnotes.js";
class Notes extends Component {

    render() {
        return (
            <div style={{ marginLeft: "10%", width: "80%" }}>
                <Notepad />
                <AllNotes />
            </div>
        );
    }
}

export default Notes;