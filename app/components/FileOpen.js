import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const {dialog} = require('electron').remote
const fs = require('fs')

export default class FileOpen extends Component {
  constructor (props) {
    super(props)
    this.state = { fileName: "This is where file content will be shown", fileContent: "No file currently selected" }
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
  }

  openSelectedFile () {
    const fileLocation = this.state.fileName

    fs.readFile(fileLocation, 'utf-8', (err, data) => {
      if (err) {
        alert('An error ocurred reading the file :' + err.message)
        return
      }

      // Change how to handle the file content
      this.setState({ fileContent: data })
      console.log(this.state.fileContent)
    })
  }

  open () {
    console.log('in open');
    dialog.showOpenDialog({properties: ['openFile'],
      filters: [
        {name: 'Structile', extensions: ['txt']}
      ]}, fileNames => {
      if (fileNames === undefined) {
        console.log('No file selected')
        return
      }

      this.setState({ fileName: fileNames[0] })
      console.log(fileNames)
      console.log(this.state.fileName)
      this.openSelectedFile()
    })
  }

  handleClick() {
    this.open();
    console.log('in handle');
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <span className="title">
            Menu
          </span>
          <br /><br /><br />
          <Link to="/file-open">Go to the Open Dialog Prototype</Link>
          <br />
          <Link to="/file-save">Go to the Save Dialog Prototype</Link>
          <br />
          <Link to="/file-open-save">Go to the Open/Save As Dialog Prototype</Link>
          <br />
          <Link to="/">Landing Page</Link>  
        </div>

        <div className="column">
          <div className="doc">
            <div className="title">Use this page to do file open operation</div>
            <p>
              This is where we open a file and display it.
            </p>
          </div>
          <br />
          <button onClick={this.handleClick} className="button is-primary">Open File</button>
          <br />
          <br />
          <div>
            <pre><b>{this.state.fileName}</b></pre>
            <pre>{this.state.fileContent}</pre>
          </div> 
        </div>
      </div>
    );
  }
}
