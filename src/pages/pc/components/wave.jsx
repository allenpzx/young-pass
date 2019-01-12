import React from 'react';

export default class WaveSVG extends React.Component {

    componentDidMount(){
        this.initWave();
        window.addEventListener('resize', this.initWave)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.initWave);
    }

    componentWillReceiveProps(){
        if(window && window.location.pathname !== '/pc-home'){
            window.removeEventListener('resize', this.initWave);
        }
    }

    initWave = () => {
        const svg = document.getElementById('wave-svg');
        const path = document.getElementById('wave-path');
        const gWinHeight = document.body.clientHeight || document.documentElement.clientHeight ;
        const gWinWidth = document.body.clientWidth || document.documentElement.clientWidth;
        console.log(gWinHeight, gWinWidth);
        const radio = this.props.size ? this.props.size : 0.2
        svg.style.width = '100vw';
        svg.style.height = gWinHeight * radio;
        path.setAttribute('d', `
            M0,${svg.style.height.slice(0, -2) * 0.1}
            C${gWinWidth * 0.25} ${gWinHeight * 0.05}, ${gWinWidth * 0.75} ${gWinHeight * 0.05}, ${gWinWidth} ${svg.style.height.slice(0, -2) *0.1}
            L${gWinWidth},${svg.style.height.slice(0, -2)}
            L0,${svg.style.height.slice(0, -2)}
            L0,${svg.style.height.slice(0, -2) * 0.1}
        `);


    }

    render() {
        return (
            <svg
                id='wave-svg'
                // viewBox='0 0 500 500'
                // preserveAspectRatio='xMidYMid meet'
            >
                <path
                    id='wave-path'
                    fill='white'
                    stroke='white'
                    strokeWidth='1px'
                />
                <text
                    className='h1title' 
                    x='50%' 
                    y='50%' 
                    dominantBaseline='middle' 
                    textAnchor='middle'
                    fontSize='2rem'
                >
                    享受社会给学生的所有福利
                </text>    
                <text x='50%' y='60%' dominantBaseline='middle' textAnchor='middle'
                    fontSize='1rem'
                >
                    自定义你的学生权益
                </text>    
                <text x='50%' y='67%' dominantBaseline='middle' textAnchor='middle'
                    fontSize='1rem'
                >
                    找到最爱的品牌及活动福利机会
                </text>    
                <text x='50%' y='74%' dominantBaseline='middle' textAnchor='middle'
                    fontSize='1rem'
                >
                    加入最会玩的学生社群
                </text>

                <path
                    id='down-arrow'
                    fill='black'
                    stroke='black'
                    strokeWidth='1px'
                />
            </svg>
        )
    }
}