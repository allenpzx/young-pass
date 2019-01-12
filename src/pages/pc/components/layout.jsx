import React from 'react';
import Header from './header.jsx';
import ScrollTop from './scroll-top.jsx';
import config from '../../../utils/project.config.js';
import MobileHeader from './mobile-header.jsx';

export default class PCLayout extends React.Component {
    render() {
        const isMobile = config.isMobile();
        return (
            <div className='pc-layout'>
                {isMobile ? <MobileHeader /> : <Header />}
                <ScrollTop>
                    {this.props.children}
                </ScrollTop>
            </div>
        )
    }
}