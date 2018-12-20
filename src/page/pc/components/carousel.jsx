import React from 'react';
import { Carousel } from 'antd';
import SymmetryWave from './symmetry-wave.jsx';

export default class extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            slides: [
                {
                    img: <img src={require('../asset/image/home-bottom.jpg')} alt='slide'/>,
                    content: <div className='slide-content-inside'>欢迎来到YoungPass 学生特权卡官网</div>
                },
                {
                    img: <img src={require('../asset/image/home-miniapp.jpg')} alt='slide'/>,
                    content: <div className='slide-content-inside'>欢迎来到YoungPass 学生特权卡官网</div>
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
                <Carousel autoplay settings>
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