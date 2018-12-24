import React from 'react';
import {withRouter} from 'react-router-dom';

@withRouter
class PCHeader extends React.Component {

    handleRoute = e => {
        const attr = e.target.dataset;
        const target = attr && attr.route ? attr.route : null
        if (target) {
            this.props.history.push(target);
        }
    }

    render() {
        return (
            <div className='pc-header'>
                <div className='inside-wrap'>
                    <img className='left' src={require('../asset/image/logo.png')} alt="logo" />
                    <div className='right' onClick={this.handleRoute}>
                        <span data-route='home'>首页<i /></span>
                        <span data-route='youngpass'>YoungPass会员<i /></span>
                        <span data-route='cooperation'>合作品牌<i /></span>
                        <span data-route='about'>关于我们<i /></span>
                        <span data-route='miniapp' className='inside-miniapp'>进入小程序</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PCHeader