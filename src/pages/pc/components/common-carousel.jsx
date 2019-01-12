import React from 'react';
import { Carousel } from 'antd';

class CommonCarousel extends React.Component {

    render() {
        const settings = {
            className: 'common-carousel',
            customPaging: function (i) {
                return (
                    <img className='common-carousel-dot' src={`${process.env.REACT_APP_CDN_IMAGE_HOST}/pagination${i}.svg`} alt={'pagination'} />
                );
            },
            autoplay: false,
            dots: true,
            dotsClass: "slick-dots common-carousel-dot",
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className='common-carousel-container'>
                <Carousel {...settings}>
                    <div>
                        <div className='common-carousel-info'>
                            <h1>商务合作</h1>
                            <h3>联系人: Dale</h3>
                            <h3>商务邮箱: young_bd@shlanyee.com</h3>
                            <h3>联系电话: 13816406574</h3>
                            <img src={`${process.env.REACT_APP_CDN_IMAGE_HOST}/about-cooperation.jpg`} alt='slide' />
                        </div>
                    </div>
                    <div>
                        <div className='common-carousel-info'>
                            <h1>商务合作</h1>
                            <h3>联系人: Dale</h3>
                            <h3>商务邮箱: young_bd@shlanyee.com</h3>
                            <h3>联系电话: 13816406574</h3>
                            <img src={`${process.env.REACT_APP_CDN_IMAGE_HOST}/about-profile.jpg`} alt='slide' />

                        </div>
                    </div>
                    <div>
                        <div className='common-carousel-info'>
                            <h1>商务合作</h1>
                            <h3>联系人: Dale</h3>
                            <h3>商务邮箱: young_bd@shlanyee.com</h3>
                            <h3>联系电话: 13816406574</h3>
                            <img src={`${process.env.REACT_APP_CDN_IMAGE_HOST}/about-cust.jpg`} alt='slide' />
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default CommonCarousel