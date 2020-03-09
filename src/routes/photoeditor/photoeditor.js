import React, { Component } from 'react';

import './editor.scss';

const interact = require('interactjs')

class PhotoEditor extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {

        interact('.resize-drag')
        .resizable({
          // resize from all edges and corners
          edges: { left: true, right: true, bottom: true, top: true },
      
          modifiers: [
            // keep the edges inside the parent
            interact.modifiers.restrictEdges({
              outer: 'parent'
            }),
      
            // minimum size
            interact.modifiers.restrictSize({
              min: { width: 100, height: 50 }
            })
          ],
      
          inertia: true
        })
        .draggable({
          onmove: window.dragMoveListener,
          inertia: true,
          modifiers: [
            interact.modifiers.restrictRect({
            //  restriction: 'parent',
              endOnly: true
            })
          ]
        })
        .on('resizemove', function (event) {
          var target = event.target
          var x = (parseFloat(target.getAttribute('data-x')) || 0)
          var y = (parseFloat(target.getAttribute('data-y')) || 0)
      
          // update the element's style
          target.style.width = event.rect.width + 'px'
          target.style.height = event.rect.height + 'px'
      
          // translate when resizing from top or left edges
          x += event.deltaRect.left
          y += event.deltaRect.top
      
          target.style.webkitTransform = target.style.transform =
              'translate(' + x + 'px,' + y + 'px)'
      
          target.setAttribute('data-x', x)
          target.setAttribute('data-y', y)
          target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
        })
      
    }

    render() {
        return (
            <div className="editor-page">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div
                            className="editor-header">video editing</div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row">
                            <div className="col-sm-12 col-md-3 col-lg-3">
                                <div className="editor-sidebar">
                                    sidebar menu
                        </div>
                            </div>
                            <div className="col-sm-12 col-md-9 col-lg-9">
                                <div className="editor-playground">

                                    <div className="editor-playground-cover">

                                        <div className="resize-drag">
                                            Draggable Element
   
                                         <div>test</div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="editor-footer">footer</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoEditor;