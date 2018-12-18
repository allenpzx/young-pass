import React from 'react';

export default class ScrollTop extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidUpdate(prev){
        if (this.props.children.props.location !== prev.children.props.location){
            this.scrollToTop();
        }
    }

    scrollToTop = () => {
        let current = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        let target = Math.ceil(current - current / 4);
        if(target < 5){
            window.scrollTo(0, 0);
            return 
        }else{
            window.scrollTo(0, target);
            window.requestAnimationFrame(this.scrollToTop);
        }
    }

    render(){
        return this.props.children
    }
}