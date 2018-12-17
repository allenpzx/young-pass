import React, { Component } from 'react';
import './asset/style/App.css';
import {Route, Link, withRouter} from 'react-router-dom';
import Home from './page/pc-static/home.jsx';
import Youngpass from './page/pc-static/youngpass.jsx';
import { connect } from 'react-redux';
import {setCount} from './redux/count.js';
import { Button } from 'antd';
// import logo from './logo.svg';
// const logo = require('./logo.svg');
import axios from 'axios';

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

    // axios.get('https://cnodejs.org/', {
    //   headers:{
    //     'Content-Type':'application/x-www-form-urlencoded',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // })
    // .then(res=>{
    //   console.log(res);
    // })
    // .catch(e=>{
    //   console.log(e);
    // })
    
    console.log('component is mounted!', window.__PRELOADED_STATE__);
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
         <img src={require('./asset/image/logo.svg')} className="App-logo" alt="logo" />
         <br />
         <br />
         <br />
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

        <Button onClick={()=>{
          this.setState({text: 'ceshi'})
        }}>
          ceshi setstate
        </Button>

      </div>
    );
  }
}

export default App;
