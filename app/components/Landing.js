import React, { Component } from 'react';

export default class Landing extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <span className="title">
            Electron File Open/Save Prototype
          </span>
        </div>

        <div className="column">
          <div className="doc">
            <div className="title">Quick Dirty Prototypes</div>
            <p>
              This is a quick dirty prototype app, to test various different things 
              and should not be considered anywhere close to proper programming.  
              Also do not use this in any form of real app/code.
            </p><br />
            {/* <router-link to="/file-open">Go to the Open Dialog Prototype</router-link>
            <br>
            <router-link to="/file-save">Go to the Save Dialog Prototype</router-link>
            <br>
            <router-link to="/file-open-save">Go to the Open/Save As Dialog Prototype</router-link> */}
          </div>
        </div>
      </div>
    );
  }
}
