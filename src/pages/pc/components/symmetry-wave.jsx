import React from 'react';

export default class CarouselWave extends React.Component {

    componentDidMount(){
        this.initWave();
        window.addEventListener('resize', this.initWave)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.initWave);
    }
    
    componentWillReceiveProps(){
        if(window && !(/^pc-/).test(window.location.pathname)){
            window.removeEventListener('resize', this.initWave);
        }
    }

    initWave = () => {
        const svg = document.getElementById('carousel-wave');
        const path = document.getElementById('carousel-wave-path');
        const container = svg.parentElement;
        const conW = container.offsetWidth;
        const conH = container.offsetHeight;
        const H = this.props.size ? this.props.size : 0.1;

        svg.style.width = conW;
        svg.style.height = conH * H;
        path.setAttribute('d', `
            M0 0
            Q ${conW * 0.5} ${conH * 0.0718} ${conW} 0
            L ${conW} ${conH}
            L 0 ${conH}
            Z
        `)
    }

    render(){
        
        const waveStyle = {
            position: 'absolute',
            bottom: 0,
            left: 0,
        }

        return (
            <svg id='carousel-wave' style={waveStyle}>
                <path
                    id='carousel-wave-path'
                    fill='white'
                    stroke='white'
                    strokeWidth='0'
                    d='
                        M0,0
                        L100,100
                    '
                />
            </svg>
        )
    }
}