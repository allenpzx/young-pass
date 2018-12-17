import React, { Component } from 'react';
import './App.css';
import {Route, Link, withRouter} from 'react-router-dom';
import Home from './page/pc-static/home.jsx';
import Youngpass from './page/pc-static/youngpass.jsx';
import { connect } from 'react-redux';
import {setCount} from './redux/count.js';
// import logo from './logo.svg';
// const logo = require('./logo.svg');

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

  state = {
    text: 'default'
  }

  componentDidMount(){
    console.log('component is mounted!');
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
         <img src={require('./logo.svg')} className="App-logo" alt="logo" />
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

        <br />
        <br />
        <br />

        {this.state.text}

        <button onClick={()=>{
          this.setState({text: 'ceshi'})
        }}>
          ceshi setstate
        </button>

      </div>
    );
  }
}

export default App;
