import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
@connect(
    state => ({
        state: state
    })
)
class PCHeader extends React.Component {

    handleRoute = e => {
        const attr = e.target.dataset;
        const target = attr && attr.route ? attr.route : null
        if (target) {
            browserHistory.push(target);
        }
    }

    render() {
        return (
            <div className='pc-header'>
                <div className='inside-wrap'>
                    <img className='left' src={require('../../../../assets/pc/logo.png')} alt="logo" />
                    <div className='right' onClick={this.handleRoute}>
                        <span data-route='pc-home'>首页<i /></span>
                        <span data-route='pc-youngpass'>YoungPass会员<i /></span>
                        <span data-route='pc-cooperation'>合作品牌<i /></span>
                        <span data-route='pc-about'>关于我们<i /></span>
                        <span data-route='pc-miniapp' className='inside-miniapp'>进入小程序</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PCHeader