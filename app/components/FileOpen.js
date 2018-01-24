import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FileOpen extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <span className="title">
            Electron File Open/Save Prototype
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
            {/* <button @click="open()">Open File</button> */}
          </div>
          {/* <br />
          <br />
          <div>
            <pre><b>{{ fileName }}</b></pre>
            <pre>{{ fileContent }}</pre>
          </div>  */}
        </div>
      </div>
    );
  }
}
