import React, { Component } from 'react';

// import PhotoUploader from "../gallary/gallary";
import { Upload, message, Button, Icon } from 'antd';
import './editor.scss';
import './photoselector.scss';
class PhotoSelector extends Component {

    constructor(props) {
        super(props);

        this.state={
            allFiles: []
        }
    }

    uploadFile = (e) => {
        let oldFIle = this.state.allFiles;
        e.target.files[0] && oldFIle.push(e.target.files[0]);
     
    }


    previewFiles = () =>{
        
    }

    render() {
        return (
            <div className="editor-page">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div
                            className="editor-header">

                            <div>
                                <div className="upload-btn-wrapper">
                                    <button className="upload-photo">Upload a file</button>
                                    <input type="file" name="myfile" 
                                     onChange={(e) => this.uploadFile(e)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12">
                        Gallary 
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="editor-footer">footer</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoSelector;