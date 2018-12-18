import React from 'react';
import {browserHistory} from 'react-router';

export default class MobileHeader extends React.Component {

    handleShow = () => {
        const menu = document.getElementById('mobile-header-menu');
        const btn = document.getElementById('mobile-header-control');
        menu.classList.contains('show') ? menu.classList.remove('show') : menu.classList.add('show')
        btn.classList.contains('show') ? btn.classList.remove('show') : btn.classList.add('show')
    }

    handleRoute = e => {
        browserHistory.push(e.target.dataset.route);
        this.handleShow();
    };

    render() {
        return (
            <div className='mobile-header'>
                <img src={require('../../../../assets/pc/logo.png')} alt='logo'/>
                <div id='mobile-header-control' onClick={this.handleShow}>
                    <span></span>
                    <span></span>
                    <span></span>
                    {/* <svg 
                    width='100%'
                    height='100%'
                    id='mobile-header-control-svg'>
                        <path
                        stroke='white'
                        strokeWidth='2px'
                         d='
                            M10 10
                            L50 10
                        '>
                            <animateTransform 
                                attributeName='transform'
                                attributeType='XML'
                                type='rotate'
                                from='0 10 10'
                                to='45 10 10'
                                begin='0s'
                                dur='1s'
                            />
                        </path>
                        <path
                        stroke='white'
                        strokeWidth='2px'
                         d='
                            M10 20
                            L50 20
                        '/>
                        <path
                        stroke='white'
                        strokeWidth='2px'
                         d='
                            M10 30
                            L50 30
                        '>
                            <animateTransform attributeName='transform'
                                attributeType='XML'
                                type='rotate'
                                from='0 50 10'
                                to='45 50 10'
                                begin='0s'
                                dur='1s'
                            />
                        </path>
                    </svg> */}
                </div>
                <div id='mobile-header-menu' className='mobile-header-menu' >
                    <ul className='mobile-header-menu-ul' onClick={this.handleRoute}>
                        <li data-route='mobile-home'>首页</li>
                        <li data-route='mobile-youngpass'>YoungPass会员</li>
                        <li data-route='mobile-about'>关于我们</li>
                        <li data-route='mobile-miniapp'>进入小程序</li>
                    </ul>
                </div>
            </div >
        )
    }
}