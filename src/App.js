import React, { Component } from 'react';
import './asset/css/App.css';
import {Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {setCount} from './redux/count.js';
import { Skeleton } from 'antd';
import loadable from '@loadable/component'
const OldPC = loadable(() => import('./page/pc/entry.jsx'), {
    fallback: <Skeleton active size={'large'} rows='20'/>
});

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