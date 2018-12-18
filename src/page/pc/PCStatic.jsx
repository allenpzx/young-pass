import React from 'react'
import Layout from './components/layout.jsx';
import Home from './pages/home.jsx';
export default class PCStatic extends React.Component {
  render(){
    return(
      <div>
        <Layout>
          <Home />
        </Layout>
      </div>
    )
  }
}