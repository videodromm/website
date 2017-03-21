import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ItemList from './ui/ItemList';
import Item from './ui/Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        wshost:'127.0.0.1',
        wsport:8088
    };
    this.changeHost = this.changeHost.bind(this);
    this.changePort = this.changePort.bind(this);
  }
  submit = (e) => {
    e.preventDefault();
    console.log('h:' + this.state.wshost + ' p:'+this.state.wsport);
    window.socket = new WebSocket('ws://' + this.state.wshost + ':' + this.state.wsport);
  }
  changeHost(e) {
    console.log('h:'+this.state.wshost);
    console.log('v:'+e.target.value);
    this.setState({wshost: e.target.value});
    console.log('h:'+this.state.wshost);
 }
  changePort(e) {
    console.log('h:'+this.state.wsport);
    console.log('v:'+e.target.value);
    this.setState({wsport: e.target.value});
    console.log('h:'+this.state.wsport);
  }
  
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="container">
            <div className="row">
                <div className="col s12 m7"><Item /></div>
                <div className="col s12 m5">
                  <form onSubmit={this.submit}>
                    <div className='form-group'>
                      <label htmlFor="host">Host</label>
                      <input id="host" 
                        type="text" 
                        required 
                        defaultValue={this.state.wshost}
                        onChange={this.changeHost}
                      />
                    </div>                  
                    <div className='form-group'>
                      <label htmlFor="port">Port</label>
                      <input id="port" 
                        type="number" 
                        required 
                        defaultValue={this.state.wsport}
                        onChange={this.changePort}
                      />
                    </div> 
                    <div className="form-group">
                      <button className="btn">Connect</button>
                    </div>
                  </form>
                </div>
                <div className="col s12 m5"><ItemList /></div>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
