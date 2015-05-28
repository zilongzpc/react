/**
 * Created by zhaopenghodoman on 15/5/27.
 */


require('./stylesheets/main.css');

import React from 'react';
// import  Hello  from './component.js';
class App extends React.Component {
  constructor() {
    this.state = { currentComponent: Feed };
  }
  openProfile() {
    require.ensure([], () => {
      var Profile = require('./Profile.js');
      this.setState({
        currentComponent: Profile
      });
    });
  }
  render() {
   return (
      return <div>{this.state.currentComponent()}</div>
    );
  }
}
React.render(<App/>,document.getElementById('app'));



//var component = require('./component.js');
//
////alert('1');
//var app = document.getElementById('app');
//app.appendChild(component());
