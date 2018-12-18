import React from 'react';
import Carousel from '../components/carousel.jsx';
import Wave from '../components/wave.jsx';
import {miniappQRCode} from '../../../utils/image.js';
import BottomWave from '../components/unsymmetry-wave.jsx';
import Footer from '../components/footer.jsx';

const infoImg = require('../../../../assets/pc/images/phone11.png');
const infoImg2 = require('../../../../assets/pc/images/phone22.png');
const infoImg3 = require('../../../../assets/pc/phone44.png');
const QR = require('../../../../assets/images/wechat_barcode.jpg');


export default class PCHome extends React.Component {
    render() {
        return (
            <div className='pc-home'>
                <Carousel />
                <Wave/>
                <div className='home-content'>
                    <div className='left'>
                        <div className='left-top'>
                            <h1>YoungPass微信小程序</h1>
                            <span>申领YoungPass学生特权卡 体验自 定义学生福利</span>
                        </div>
                        <div className='left-down'>
                            <img src={miniappQRCode} alt="qr-code"/>
                            <span>扫码进入</span>
                        </div>
                    </div>
                    <div className='right'>
                        <img src={infoImg3} alt='miniapp_mockup'/>
                        <img src={infoImg} alt='miniapp_mockup'/>
                        <img src={infoImg2} alt='miniapp_mockup'/>
                    </div>
                </div>

                <div className='home-content-2' style={{height: '80vh'}}>
                    <h1>YoungPass学生特权使用指南</h1>
                    <div className='icon-group'>
                        <div className='icon-item'>
                            <span className='step-youngpass'>Step 1</span>
                            <img src={require('../../../../assets/pc/svg/tequan.svg')} alt='pc-icon'/>
                            <span>选择喜爱的品牌特权</span>
                        </div>
                        <div className='icon-item'>
                            <span className='step-youngpass'>Step 2</span>
                            <img src={require('../../../../assets/pc/svg/card.svg')} alt='pc-icon'/>
                            <span>加入自己的YoungPass卡中</span>
                        </div>
                        <div className='icon-item'>
                            <span className='step-youngpass'>Step 3</span>
                            <img src={require('../../../../assets/pc/svg/quanyi.svg')} alt='pc-icon'/>
                            <span>随时使用卡中权益</span>
                        </div>
                    </div>
                    <BottomWave />
                </div>

                <div className='home-content-3'>
                    <img className='logo' src={require('../../../../assets/pc/logo2.png')} alt="logo"/>
                    <h1 className='info' style={{zIndex: 10, color: 'white'}}>学生权益不止火车票优惠 一起 探索体验更多美好福利吧</h1>
                    <div className='btn-group'>
                        <button onClick={()=>window.history.push('/pc-miniapp')}>立即进入</button>
                        <button onClick={()=>window.history.push('/pc-youngpass')}>了解更多</button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
