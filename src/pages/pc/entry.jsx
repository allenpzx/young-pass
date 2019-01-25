import React from 'react'
import Layout from './components/layout.jsx';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home.jsx';
import YoungPass from './pages/youngpass.jsx';
import Cooperation from './pages/cooperation.jsx';
import About from './pages/about.jsx';
import MiniApp from './pages/miniapp.jsx';

// import withLoadable from './components/with-loadable.js';
// const Home = withLoadable(import('./pages/home.jsx'));
// const YoungPass = withLoadable(import('./pages/youngpass.jsx'));
// const Cooperation = withLoadable(import('./pages/cooperation.jsx'));
// const About = withLoadable(import('./pages/about.jsx'));
// const MiniApp = withLoadable(import('./pages/miniapp.jsx'));

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/youngpass' component={YoungPass} />
          <Route path='/cooperation' component={Cooperation} />
          <Route path='/about' component={About} />
          <Route path='/miniapp' component={MiniApp} />
          <Route component={Home} />
        </Switch>
      </Layout>
    )
  }
}