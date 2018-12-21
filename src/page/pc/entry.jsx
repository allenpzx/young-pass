import React from 'react'
import Layout from './components/layout.jsx';
import Home from './pages/home.jsx';
import YoungPass from './pages/youngpass.jsx';
import {Route, Switch} from 'react-router-dom';
import Cooperation from './pages/cooperation.jsx';

export default class extends React.Component {
  render(){
    return(
        <Layout>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/youngpass' component={YoungPass} />
            <Route path='/cooperation' component={Cooperation} />
            {/* <Route component={Maintain} /> */}
          </Switch>
        </Layout>
    )
  }
}