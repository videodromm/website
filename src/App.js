import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ItemList from './ui/ItemList';
import Item from './ui/Item';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="container">
            <div className="row">
                <div className="col s12 m7"><Item /></div>
                <div className="col s12 m5"><ItemList /></div>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
