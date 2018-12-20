import React from 'react';

export default class BottomWave extends React.Component {

    componentDidMount() {
        this.initWave();
        window.addEventListener('resize', this.initWave)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.initWave);
    }

    componentWillReceiveProps(){
        if(window && !(/^pc-/).test(window.location.pathname)){
            window.removeEventListener('resize', this.initWave);
        }
    }

    initWave = () => {
        const svg = document.getElementById('bottom-wave-svg');
        const path = document.getElementById('bottom-wave-path');
        const container = svg.parentElement;
        const conW = container.offsetWidth;
        const conH = container.offsetHeight;
        svg.style.width = conW;
        svg.style.height = conH * 0.3;

        path.setAttribute('d', `
            M0 ${conH * 0.15}
            C${conW * 0.25} ${conH * 0.2}, ${conW * 0.75} ${conH * 0.2}, ${conW} 0
            L${conW} ${conH}
            L0 ${conH}
            Z
        `);
    }

    render() {
        return (
            <svg id='bottom-wave-svg'>
                <defs>
                    <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop offset='0%' style={{stopColor:'#fbe43f', stopOpacity:'1'}} />
                        <stop offset='100%' style={{stopColor:'#fac931', stopOpacity:'1'}} />
                    </linearGradient>
                </defs>
                <path
                    id='bottom-wave-path'
                    fill='url(#grad1)'
                    stroke='none'
                    strokeWidth='1px'
                />
            </svg>
        )
    }
}