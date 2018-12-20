import React from 'react'
import Layout from './components/layout.jsx';
import Home from './pages/home.jsx';
import YoungPass from './pages/youngpass.jsx';
import {Route, Switch} from 'react-router-dom';

export default class extends React.Component {
  render(){
    return(
        <Layout>
          <Switch>
            <Route path='/static/home' component={Home} />
            <Route path='/static/youngpass' component={YoungPass} />
          </Switch>
        </Layout>
    )
  }
}