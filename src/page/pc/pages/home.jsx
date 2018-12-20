import React from 'react';
import Carousel from '../components/carousel.jsx';
import BottomWave from '../components/unsymmetry-wave.jsx';
import Footer from '../components/footer.jsx';
import '../asset/css/home.css';
import '../asset/css/layout.css';
import '../asset/css/svg.css';

export default class extends React.Component {
    render() {
        return (
            <div className='pc-home'>
                <Carousel />
                <div className='home-underwave'>
                    享受社会给学生的所有福利<br/>
                    自定义你的学生权益<br />
                    找到最爱的品牌及活动福利机会<br />
                    加入最会玩的学生社群
                </div>
                <div className='home-content'>
                    <div className='left'>
                        <div className='left-top'>
                            <h1>YoungPass微信小程序</h1>
                            <span>申领YoungPass学生特权卡 体验自 定义学生福利</span>
                        </div>
                        <div className='left-down'>
                            <img src={'https://cdn.heyyoung.com.cn/isolate_mini_qrcode.jpg'} alt="qr-code" />
                            <span>扫码进入</span>
                        </div>
                    </div>
                    <div className='right'>
                        <img src={require('../asset/image/phone1.png')} alt='miniapp_mockup' />
                        <img src={require('../asset/image/phone2.png')} alt='miniapp_mockup' />
                        <img src={require('../asset/image/phone2.png')} alt='miniapp_mockup' />
                    </div>
                </div>

                <div className='home-content-2' style={{height: '80vh'}}>
                    <h1>YoungPass学生特权使用指南</h1>
                    <div className='icon-group'>
                        <div className='icon-item'>
                            <span className='step-youngpass'>Step 1</span>
                            <img src={require('../asset/image/svg/tequan.svg')} alt='pc-icon'/>
                            <span>选择喜爱的品牌特权</span>
                        </div>
                        <div className='icon-item'>
                            <span className='step-youngpass'>Step 2</span>
                            <img src={require('../asset/image/svg/card.svg')} alt='pc-icon'/>
                            <span>加入自己的YoungPass卡中</span>
                        </div>
                        <div className='icon-item'>
                            <span className='step-youngpass'>Step 3</span>
                            <img src={require('../asset/image/svg/quanyi.svg')} alt='pc-icon'/>
                            <span>随时使用卡中权益</span>
                        </div>
                    </div>
                    <BottomWave />
                </div>

                <div className='home-content-3'>
                    <img className='logo' src={require('../asset/image/logo2.png')} alt="logo"/>
                    <h1 className='info' style={{zIndex: 10, color: 'white'}}>学生权益不止火车票优惠 一起 探索体验更多美好福利吧</h1>
                    <div className='btn-group'>
                        <button onClick={()=>this.props.history.push('/miniapp')}>立即进入</button>
                        <button onClick={()=>this.props.history.push('/youngpass')}>了解更多</button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
