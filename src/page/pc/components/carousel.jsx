import React from 'react';
import Slider from 'react-slick';

class PCCarousel extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            slides: [
                {
                    img: <img src={require('../../../../assets/pc/images/home-slide1.jpg')} alt='slide'/>,
                    content: <div className='slide-content'>欢迎来到YoungPass 学生特权卡官网</div>
                },
                {
                    img: <img src={require('../../../../assets/pc/images/home-slide1.jpg')} alt='slide'/>,
                    content: <div className='slide-content'>欢迎来到YoungPass 学生特权卡官网</div>
                },
            ]
        }
    }

    componentDidMount(){
        const slides = this.props.slides || null;
        if(slides){
            this.setState({slides: slides})
        }
    }
 
    render() {
        const settings = this.props.settings ? this.props.settings : {
            className: 'pc-carousel',
            dotsClass: 'slick-dots carousel-dots',
            autoplay: false,
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        
        return (
            <Slider {...settings}>
                {
                    this.state.slides.map(v=>{
                        return (
                            <div key={Math.random() * 10 + v.content}>
                                {v.img}
                                {v.content}
                            </div>
                        )
                    })
                }
            </Slider>
        )
    }
}

export default PCCarousel