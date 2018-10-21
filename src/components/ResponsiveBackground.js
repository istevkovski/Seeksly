import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import {getAvgColor} from '../actions/Types';
import FastAverageColor from 'fast-average-color';


class ResponsiveBackground extends Component {
    constructor(props) {
        super(props);
        this.responsiveImage = React.createRef();
    }

    componentDidMount() {
        const rBckgCanvas = document.getElementById('rBckgCanvas');
        const ctx = rBckgCanvas.getContext('2d');
        const img = new Image();
        rBckgCanvas.width = window.screen.width;
        rBckgCanvas.height = window.screen.height;
        img.crossOrigin = "Anonymous";
        img.src = "https://picsum.photos/1366/768/?random";
        img.onload = function(){
            ctx.drawImage(img,0,0); // Or at whatever offset you like
            const fac = new FastAverageColor();
            const color = fac.getColor(document.getElementById('rBckgCanvas'));
            store.dispatch(getAvgColor(color));
            // console.log(color);
        };
    }

    render() {
        return (
            <canvas id="rBckgCanvas" className="responsive-background"></canvas>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = {
    getAvgColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveBackground);