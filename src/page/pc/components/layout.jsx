import React from 'react';
import Header from './header.jsx';
import ScrollTop from './scroll-top.jsx';
export default class PCLayout extends React.Component {
    render() {
        return (
            <div className='pc-layout'>
                <Header />
                <ScrollTop>
                    {this.props.children}
                </ScrollTop>
            </div>
        )
    }
}