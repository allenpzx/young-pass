import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../../pc/components/footer.jsx';
import { miniappQRCode, miniappMockUp3 } from '../../../utils/image.js';

export default class MiniApp extends React.Component {
    render() {
        return (
            <div className='mobile-miniapp'>
                <Header />
                <div className='mobile-miniapp-content-1'>
                    <div className='title'>
                        <h2>进入YoungPass</h2>
                        <h2>开启专属你的学生特权</h2>
                    </div>
                    <div className='qrcode-box'>
                        <h3>扫码进入</h3>
                        <img src={miniappQRCode} alt='qrcode' />
                    </div>
                    <img className='mock-up' src={require('../../../../assets/pc/phone1.png')} alt={'miniapp-mockup'} />
                </div>

                <div className='mobile-miniapp-content-2'>
                    <h1>自定义你的品牌权益</h1>
                    <img src={miniappMockUp3} alt='miniappMockUp3' />
                </div>
                <Footer />
            </div>
        )
    }
}