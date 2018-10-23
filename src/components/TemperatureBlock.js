import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {fetchLocation, fetchSatelitePosition, backgroundReady} from '../actions/Types';
import paper from 'paper';

const IPDATA_API_KEY = process.env.REACT_APP_IPDATA_API_KEY;
const IPDATA_API_LINK = 'https://api.ipdata.co?api-key=';
let wrapPosition = {};
let wrapLocationInfo = {};

class TemperatureBlock extends Component {
    constructor(props) {
        super(props);
        this.statisticsBlock1 = React.createRef();
    }

    getAreaAvgColor() {
            var canvas = document.getElementById('myCanvas');
            paper.setup(canvas);
            var raster = new paper.Raster('rBckgCanvas');
            raster.position = paper.view.center;
            raster.opacity = 0;
            const weatherBlock = document.querySelectorAll('.statistics-block-1')[0];
            const weatherPosInfo = {
                x: (window.screen.width/2)-weatherBlock.offsetWidth/2,
                y: 100,
                width: weatherBlock.offsetWidth,
                height: weatherBlock.offsetHeight
            };
            // console.log(weatherPosInfo);
            // console.log(raster.getAverageColor(weatherPosInfo).lightness);
            // console.log(raster.getAverageColor(weatherPosInfo));
            const backgroundLightness = raster.getAverageColor(weatherPosInfo).lightness;
            if(backgroundLightness <= 0.5)
                this.statisticsBlock1.current.style.color = '#fff';
            if(document.getElementById('myCanvas'))
                document.getElementById('myCanvas').remove();
    }
    
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                wrapPosition = {
                    accuracy: position.coords.accuracy,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                await fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
                    .then(promise => {
                        return promise.json();
                    })
                    .then(locJSON => {
                        wrapLocationInfo = {
                            ...wrapLocationInfo,
                            temperature: locJSON.main.temp
                        }
                        // console.log(locJSON);
                    });
                await fetch(`${IPDATA_API_LINK}${IPDATA_API_KEY}`)
                    .then(promise => {
                        return promise.json();
                    })
                    .then(locJSON => {
                        wrapLocationInfo = {
                            ...wrapLocationInfo,
                            city: locJSON.city,
                            country: locJSON.country_name
                        }
                        // console.log(locJSON);
                    });
                store.dispatch(fetchSatelitePosition(wrapPosition));
                store.dispatch(fetchLocation(wrapLocationInfo));
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    componentDidMount() {
        this.getLocation();
        store.subscribe(() => {
            if(store.getState().backgroundReady.backgroundLoaded === true){
                this.getAreaAvgColor();
                store.dispatch(backgroundReady(false));
            }
        });
    }

    render() {
        return (
            <div ref={this.statisticsBlock1} className="statistics-block-1">
                <div className="temperature">{wrapLocationInfo.temperature ? wrapLocationInfo.temperature : '--'}°C</div>
                <div className="location">{wrapLocationInfo.city ? wrapLocationInfo.city : 'City'}, {wrapLocationInfo.country ? wrapLocationInfo.country : 'Country'}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = {
    fetchLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(TemperatureBlock);