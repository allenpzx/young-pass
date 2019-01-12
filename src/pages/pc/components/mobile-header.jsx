import React from 'react';
import '../asset/css/mobile-header.css';
import {logo} from '../../../utils/images.js';
import {withRouter} from 'react-router-dom';

@withRouter
class MobileHeader extends React.Component {

    handleShow = () => {
        const menu = document.getElementById('mobile-header-menu');
        const btn = document.getElementById('mobile-header-control');
        menu.classList.contains('show') ? menu.classList.remove('show') : menu.classList.add('show');
        btn.classList.contains('show') ? btn.classList.remove('show') : btn.classList.add('show');
    }

    handleRoute = e => {
        this.props.history.push(e.target.dataset.route);
        this.handleShow();
    };

    render() {
        return (
            <div className='mobile-header'>
                <img src={logo} alt='logo'/>
                <div id='mobile-header-control' onClick={this.handleShow}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div id='mobile-header-menu' className='mobile-header-menu' >
                    <ul className='mobile-header-menu-ul' onClick={this.handleRoute}>
                        <li data-route='home'>首页</li>
                        <li data-route='youngpass'>YoungPass会员</li>
                        <li data-route='about'>关于我们</li>
                        <li data-route='miniapp'>进入小程序</li>
                    </ul>
                </div>
            </div >
        )
    }
}
export default MobileHeader