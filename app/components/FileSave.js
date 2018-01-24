import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const {dialog} = require('electron').remote
const fs = require('fs')

export default class FileSave extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      templateId: '5afdf3f6-ffc4-11e7-ba89-0ed5f89f718b',
      'name': 'test',
      'checkbox1': false,
      'choice1': 'one',
      'choice2': 'one',
      'choice3': [],
      'author' : 'Ali Satter'
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  saveToFile (fileLocation, fileData) {
    fs.writeFile(fileLocation, fileData, 'utf-8', (err) => {
      if (err) {
        alert('An error ocurred reading the file :' + err.message)
        return
      }

      console.log('File saved!  Location: ' + fileLocation)
    })
  }

  save () {
    dialog.showSaveDialog({filters: [
      {name: 'Structile', extensions: ['txt']}
    ]}, fileName => {
      if (fileName === undefined) {
        console.log('No file location selected')
        return
      }
      // Save the form content
      this.saveToFile(fileName, JSON.stringify(this.state))
    })
  }

  handleClick() {
    this.save();
    console.log('in handle');
  }

  handleSubmit(event) {
    console.log('preventing default form submit handler!');
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const type = target.type;
    let value = null;

    switch(type) {
      case "select-multiple":
        let options = target.options;
        value = [];
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        break;
      case "checkbox":
        value = target.checked;
        break;
      default:
        value = target.value;
    }

    console.log(target.type)
    console.log(name)
    console.log(value)

    this.setState({
      [name]: value
    });
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
            <div className="title">Use this page to do file save operation</div>
            <p>
              This is where we save the form data into a file.
            </p>
            <br />
            <button onClick={this.handleClick} className="button is-link">Save File</button>
            <br />
            <br />
          </div>
          <div>
            <p><b>File will contain data from the following form:</b></p>
              <form onSubmit={this.handleSubmit}>
                <input type="hidden" name="templateId" value={this.state.templateId} onChange={this.handleChange} />
                <p>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></p><br />
                <p>Checkbox 1: <input type="checkbox" name="checkbox1" value={this.state.checkbox1} checked={this.state.checkbox1} onChange={this.handleChange}/></p><br />
                <p>Choice 1: <br />
                  One: <input type="radio" name="choice1" value="one" checked={this.state.choice1 === 'one'} onChange={this.handleChange} />
                  Two: <input type="radio" name="choice1" value="two" checked={this.state.choice1 === 'two'} onChange={this.handleChange} />
                </p><br />
                <p>
                  Choice 2:
                  <select value={this.state.choice2} onChange={this.handleChange} name="choice2">
                    <option value="one" >one</option>
                    <option value="two">two</option>
                  </select>
                </p><br />
                <p>
                  Multi-Choice 3: <br />
                  <select value={this.state.choice3} onChange={this.handleChange} name="choice3" multiple>
                    <option value='one'>one</option>
                    <option value='two'>two</option>
                    <option value='three'>three</option>
                  </select>
                </p><br />
              </form>
              <b>Following is what will be saved in the file:</b><br /><pre>{ JSON.stringify(this.state) }</pre>
          </div>
        </div>
      </div>
    );
  }
}
