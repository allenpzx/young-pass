import React from 'react';
import SymmetryWave from '../components/symmetry-wave.jsx';
import Footer from '../components/footer.jsx';
import '../asset/css/miniapp.css';
export default class MiniApp extends React.Component {

    render() {

        return (
            <div className='pc-miniapp'>
                        <div className='content-1 miniapp-content-1'>
                            <div className='miniapp-content-1-title'>
                                <h1>进入YoungPass</h1>
                                <h1>开启专属你的学生特权</h1>
                                <h3>扫码进入</h3>
                                <img src='https://cdn.heyyoung.com.cn/isolate_mini_qrcode.jpg' alt={'miniappQRCode'}/>
                            </div>
                            <SymmetryWave />
                            <img className='phone-mockup' src={require('../asset/image/phone1.png')} alt={'phone1'} />
                        </div>
                        <div id='ceshi2' className='miniapp-content-2'>
                            <h1>自定义你的品牌权益</h1>
                            <img src={require('../asset/image/phone2.png')} alt={'phone2'} />
                        </div>
                        <Footer />
            </div>
        )
    }
}