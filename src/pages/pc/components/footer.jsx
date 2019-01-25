import React from 'react';

export default class PCFooter extends React.Component {

    render() {
        return (
            <div className='pc-footer'>
                    <img className='left' src={`${process.env.REACT_APP_CDN_IMAGE_HOST}/logo.png`} alt="logo" />

                    <div className='right'>
                        <svg className='footer-svg' viewBox="0 0 1025 1024">
                            <path d="M690.325333 102.848c-13.802667 2.453333-44.629333 14.293333-44.885333 39.808-0.256 25.493333 27.050667 42.133333 40.832 43.413333 50.88 0 294.208-13.205333 249.706667 221.568-6.165333 25.749333-10.88 65.173333 19.669333 73.472 27.754667 6.976 44.885333-22.016 52.586667-44.096C1011.925333 411.328 1124.458667 74.858667 690.325333 102.848z"></path>
                            <path d="M753.621333 495.786667c0 0-51.008 11.029333-26.88-26.922667 37.888-74.218667-23.786667-196.010667-183.658667-115.072-55.082667 29.354667-55.082667 8.554667-53.248-28.16 4.949333-200.469333-366.634667-57.536-471.914667 203.114667C-41.429333 686.912 53.632 823.552 200.682667 883.2c358.933333 128.128 620.266667-83.904 664.810667-220.949333C924.906667 456.32 753.621333 495.786667 753.621333 495.786667zM409.429333 835.797333c-169.898667 23.338667-320.490667-51.328-336.426667-166.677333-15.850667-115.413333 108.992-227.946667 278.890667-251.285333 169.898667-23.36 320.469333 51.242667 336.405333 166.656C704.170667 699.882667 579.285333 812.330667 409.429333 835.797333z"></path>
                            <path d="M834.624 435.349333c17.088 4.266667 23.744-9.749333 25.621333-22.549333 1.749333-12.8 31.253333-186.325333-158.250667-166.314667-14.336 1.578667-24 10.154667-22.336 22.741333 1.578667 12.608 12.202667 19.669333 20.288 18.709333 8.085333-0.938667 134.656-23.125333 124.288 110.250667C826.133333 410.325333 817.6 431.082667 834.624 435.349333z"></path>
                            <path d="M354.069333 498.624c-88.554667 16.981333-149.461333 87.744-135.978667 158.08 13.482667 70.336 96.256 113.536 184.853333 96.533333 88.576-16.96 149.418667-87.744 135.978667-158.037333C525.376 524.885333 442.666667 481.642667 354.069333 498.624zM343.552 688.384c-30.592 0-55.402667-21.013333-55.402667-47.125333 0-26.005333 24.810667-47.125333 55.402667-47.125333s55.381333 21.12 55.381333 47.125333C398.933333 667.328 374.122667 688.384 343.552 688.384zM434.282667 624.789333c-11.413333 0-23.018667-13.76-23.018667-30.698667 0-16.917333 11.605333-30.634667 23.018667-30.634667s23.061333 13.717333 23.061333 30.634667C457.344 611.050667 445.696 624.789333 434.282667 624.789333z"></path>
                        </svg>

                        <svg className="footer-svg" viewBox="0 0 1024 1024">
                        <path d="M693.12 347.264c11.776 0 23.36 0.896 35.008 2.176-31.36-146.048-187.456-254.528-365.696-254.528C163.2 94.912 0 230.656 0 403.136c0 99.52 54.272 181.248 145.024 244.736L108.8 756.864l126.72-63.488c45.312 8.896 81.664 18.112 126.912 18.112 11.392 0 22.656-0.512 33.792-1.344-7.04-24.256-11.2-49.6-11.2-76.032C385.088 475.776 521.024 347.264 693.12 347.264zM498.304 249.024c27.392 0 45.376 17.984 45.376 45.248 0 27.136-17.984 45.312-45.376 45.312-27.072 0-54.336-18.176-54.336-45.312C443.968 266.944 471.168 249.024 498.304 249.024zM244.672 339.584c-27.2 0-54.592-18.176-54.592-45.312 0-27.264 27.392-45.248 54.592-45.248S289.92 266.944 289.92 294.272C289.92 321.408 271.872 339.584 244.672 339.584zM1024 629.76c0-144.896-145.024-262.976-307.904-262.976-172.48 0-308.224 118.144-308.224 262.976 0 145.28 135.808 262.976 308.224 262.976 36.096 0 72.512-9.024 108.736-18.112l99.392 54.528-27.264-90.624C969.728 783.872 1024 711.488 1024 629.76zM616.128 584.384c-17.984 0-36.224-17.92-36.224-36.224 0-18.048 18.24-36.224 36.224-36.224 27.52 0 45.376 18.176 45.376 36.224C661.504 566.464 643.648 584.384 616.128 584.384zM815.488 584.384c-17.856 0-36.032-17.92-36.032-36.224 0-18.048 18.112-36.224 36.032-36.224 27.264 0 45.376 18.176 45.376 36.224C860.864 566.464 842.752 584.384 815.488 584.384z"></path>
                        </svg>

                        <img className='xhs' src={`${process.env.REACT_APP_CDN_IMAGE_HOST}/xiaohongshu.svg`} alt={'xhs'}/>
                    </div>
            </div >
        )
    }
}