import React from 'react';
import { Carousel } from 'antd';
import SymmetryWave from './symmetry-wave.jsx';
import {withRouter} from 'react-router';
import config from '../../../utils/project.config.js';

@withRouter
class CarouselCompo extends React.Component {

    constructor(props){
        super(props)
        this.isMobile = config.isMobile();
        this.state = {
            slides: [
                {
                    img: <img src={`${process.env.REACT_APP_CDN_IMAGE_HOST}/home-bottom.jpg`} alt='slide'/>,
                    content: <div className='slide-content-inside'>{this.isMobile ? <div onClick={()=>this.props.history.push('/miniapp')} className='mobile-home-index'><span>欢迎来到YoungPass<br />学生特权卡官网</span><button>了解更多</button></div> : '欢迎来到YoungPass 学生特权卡官网'}</div>
                },
                {
                    img: <img src={`${process.env.REACT_APP_CDN_IMAGE_HOST}/home-miniapp.jpg`} alt='slide'/>,
                    content: <div className='slide-content-inside'>{this.isMobile ? <div onClick={()=>this.props.history.push('/miniapp')} className='mobile-home-index'><span>欢迎来到YoungPass<br />学生特权卡官网</span><button>了解更多</button></div> : '欢迎来到YoungPass 学生特权卡官网'}</div>
                }
            ]
        }
    }

    componentDidMount(){
        if(this.props.slides){
            this.setState({slides: this.props.slides})
        }
    }
 
    render() {
        const settings = this.props.settings ? this.props.settings : {
            dotsClass: 'slick-dots option-dots',
            autoplay: false,
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        
        return (
            <div className='wave-carousel'>
                <Carousel autoplay {...settings} draggable>
                    {
                        this.state.slides.map(v=>(
                            <div className='slick-content' key={Math.random() * 10 + v.content}>
                                {v.img}
                                {v.content}
                            </div>
                        ))
                    }
                </Carousel>
                <SymmetryWave />
            </div>
        )
    }
}
export default CarouselCompo