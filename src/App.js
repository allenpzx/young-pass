import React, { Component } from 'react';
import './asset/css/App.css';
import {Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {setCount} from './redux/count.js';
import OldPC from './pages/pc/entry.jsx';

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
    return (
      <div className="App">
        <Route path='/static' component={OldPC} />
        <Route component={OldPC} />
      </div>
    );
  }
}

export default App;