import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {fetchLocation, fetchSatelitePosition} from '../actions/Types';

const IPDATA_API_KEY = '97c8ed3fa4d7eb6f35d8d0531aa54b4de00d899574a7950b2d7e2f20';
const IPDATA_API_LINK = 'https://api.ipdata.co?api-key=';
let wrapPosition = {};
let wrapLocationInfo = {};

class TemperatureBlock extends Component {
    constructor(props) {
        super(props);
        this.statisticsBlock1 = React.createRef();
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
            if(store.getState().Actions.rBckgIsDark === true)
                this.statisticsBlock1.current.style.color = '#fff';
            else
                this.statisticsBlock1.current.style.color = '#616161';
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