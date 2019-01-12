import React from 'react';
import { browserHistory } from 'react-router';

export default class LogoSVG extends React.Component {

    constructor(props){
        super(props)
        this.svgStyle = {
            width: 'auto', 
            height: '5rem', 
            zIndex: 3
        }
    }

    componentDidMount(){
        this.initWave();
        window.addEventListener('resize', this.initWave)
    }

    componentWillMount(){
        window.removeEventListener("resize", this.initWave);
    }

    componentWillReceiveProps(props){
        if(browserHistory.getCurrentLocation().pathname !== '/pc-home'){
            window.removeEventListener("resize", this.initWave);
        }
    }

    initWave = () => {
        const svg = document.getElementById('logo-svg');
        const path = document.getElementById('logo-path');
        const rect = document.getElementById('logo-rect');
        const text = document.getElementById('text-g');
        const X = text.getBBox().x + text.getBBox().width * 0.5;
        const Y = text.getBBox().y;
        rect.setAttribute('x', X);
        rect.setAttribute('y', Y);


    }

    render() {
        return (
            <svg
                id='logo-svg'
                style={this.svgStyle}
            >
                <text
                    fill='white'
                    id='logo-text' 
                    x="50%" 
                    y="50%" 
                    dominantBaseline="middle" 
                    textAnchor="middle"
                    fontSize='2rem'
                >
                    <tspan>Youn</tspan>
                    <tspan id='text-g' dx="0" dy="0" rotate="0" >g</tspan>
                    <tspan dx="2" dy="-5" rotate="0" style={{fontSize: '2.1rem'}}>p</tspan>
                    <tspan dy='5'>ass</tspan>
                </text> 
                <rect transform='rotate(10)' fill='none' strokeWidth='2px' rotate='5' stroke='yellow' id='logo-rect' width='2.2rem' height='3rem'/>
            </svg>
        )
    }
}