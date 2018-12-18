import React from 'react';
import SymmetryWave from '../components/symmetry-wave.jsx';
import { SectionsContainer, Section } from 'react-fullpage';
import Footer from '../components/footer.jsx';
import {miniappQRCode} from '../../../utils/image.js';
export default class MiniApp extends React.Component {

    render() {
        const options = {
            sectionClassName:     'section',
            anchors:              ['sectionOne', 'sectionTwo'],
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        false,
            arrowNavigation:      true,
            delay:                1000,
            autoScrolling: false,
        };

        return (
            <div className='pc-miniapp'>
                <SectionsContainer {...options}>
                    <Section>
                        <div className='content-1 miniapp-content-1'>
                            <div className='miniapp-content-1-title'>
                                <h1>进入YoungPass</h1>
                                <h1>开启专属你的学生特权</h1>
                                <h3>扫码进入</h3>
                                <img src={miniappQRCode} alt={'miniappQRCode'}/>
                            </div>
                            <SymmetryWave />
                            <img src={require('../../../../assets/pc/phone1.png')} alt={'phone1'} />
                        </div>
                    </Section>
                    <Section>
                        <div id='ceshi2' className='miniapp-content-2'>
                            <h1>自定义你的品牌权益</h1>
                            <img src={require('../../../../assets/pc/phone2.png')} alt={'phone2'} />
                        </div>
                        <Footer />
                    </Section>
                </SectionsContainer>
            </div>
        )
    }
}