import React from 'react';
import Header from '../components/header.jsx';
import Carousel from '../../pc/components/carousel.jsx';
import Wave from '../../pc/components/symmetry-wave.jsx';
import Footer from '../../pc/components/footer.jsx';
import BottomWave from '../../pc/components/unsymmetry-wave.jsx';
import {miniappQRCode, homeSlide1, miniappMockUp3, aboutMe} from '../../../utils/image.js';
import { browserHistory } from 'react-router';
import {fullPage} from '../../../utils/fullpage.js';
export default class MobileHome extends React.Component {
    render() {
        const settings = {
            className: 'mobile-carousel',
            autoplay: false,
            dots: true,
            dotsClass: 'slick-dots mobile-carousel-dots',
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        }

        const slides = [{
            img: <img src={aboutMe} alt='aboutme'/>,
            content: (()=>{
                return (
                    <div className='slide-content slide-content-mobile'>
                        <h2>欢迎来到YoungPass<br />学生特权官网</h2>
                        {/* <p>这是一些介绍文字这是一些介绍文字</p> */}
                        <button onClick={fullPage}>查看更多</button>
                    </div>
                )
            })()
        }]

        return (
            <div className='mobile-home'>
                <Header />
                <div className='mobile-carousel-container'>
                    <Carousel slides={slides} settings={settings} />
                    <Wave/>
                </div>

                <div className='mobile-home-content-1'>
                    <h1>YoungPass微信小程序</h1>
                    <h3>申领一张YoungPass，吃喝玩乐自定义</h3>

                    <div className='container-1'>
                        <img className='miniapp-mockup' src={miniappMockUp3} alt='info' />
                    </div>
                    <div className='container-2'>
                        <img className='miniapp-entry' src={miniappQRCode} alt='mini-app' />
                    </div>
                </div>
            
                <div className='home-content-2'>
                    <h1>申领YoungPass 使用特权</h1>
                    <div className='icon-group'>
                        <div className='icon-item'>
                            <img src={require('../../../../assets/pc/svg/tequan.svg')} alt='pc-icon'/>
                            <span>选择<br />喜爱的品牌特权</span>
                        </div>
                        <div className='icon-item'>
                            <img src={require('../../../../assets/pc/svg/card.svg')} alt='pc-icon'/>
                            <span>加入<br />自己的特权卡中</span>
                        </div>
                        <div className='icon-item'>
                            <img src={require('../../../../assets/pc/svg/quanyi.svg')} alt='pc-icon'/>
                            <span>随时<br />使用卡中权益</span>
                        </div>
                    </div>
                    <BottomWave />
                </div>

                <div className='home-content-3'>
                    <img className='logo' src={require('../../../../assets/pc/logo2.png')} alt="logo"/>
                    <h1 className='info' style={{zIndex: 10, color: 'white'}}><span>学生权益不止火车票优惠</span><br />一起 探索体验更多美好福利吧</h1>
                    <div className='btn-group'>
                        <button onClick={()=>browserHistory.push('/mobile-miniapp')}>立即进入</button>
                        <button onClick={()=>browserHistory.push('/mobile-youngpass')}>了解更多</button>
                    </div>
                </div>


                <Footer />
            </div>
        )
    }
}