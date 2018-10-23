import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Preloader from './components/Preloader';
import Logo from './components/Logo';
import ResponsiveBackground from './components/ResponsiveBackground';
import NewsBar from './components/NewsBar';
import TemperatureBlock from './components/TemperatureBlock';
import SearchBar from './components/SearchBar';
import SuggestionBubbles from './components/SuggestionBubbles';
import Footer from './components/Footer';

// Reducers

// Actions
import {fetchLocation} from './actions/fetchLocation';

// Styles
import './styles/style.scss';


class App extends Component {

  render() {  
    return (
      <div className="app">
        <canvas style={{position: "fixed", zIndex:"-1"}} id="myCanvas" width={window.screen.width} height={window.screen.height}></canvas>
        <Preloader />
        <ResponsiveBackground />
        <NewsBar />
        <div className="headsup-block">
          <Logo />
          <TemperatureBlock />
        </div>
        <SearchBar />
        <SuggestionBubbles />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchLocation: () => dispatch(fetchLocation())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
