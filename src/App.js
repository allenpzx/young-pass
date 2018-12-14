import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Link, withRouter} from 'react-router-dom';
import Home from './page/pc-static/home.jsx';
import Youngpass from './page/pc-static/youngpass.jsx';
import { connect } from 'react-redux';
import {setCount} from './redux/count.js';

@withRouter
@connect(
  state=>({
    count: state.count
  }),
  dispatch=>({
    add: ()=>setCount.add(dispatch),
    subtract: ()=>setCount.subtract(dispatch)
  })
)
class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
         {/* <img src={logo} className="App-logo" alt="logo" /> */}
         ceshi4424234sdfsfs
         <br />
         <br />
         <br />
        <Link to='/home'>home</Link> <br />
        <Link to='/youngpass'>youngpass</Link><br /><br /><br />
        <Route path='/home' component={Home} />
        <Route path='/youngpass' component={Youngpass} />
        <br />
        {this.props.count}
        <br />
        <button onClick={this.props.add}>add</button><br />
        <button onClick={this.props.subtract}>subtract</button><br />
      </div>
    );
  }
}

export default App;
