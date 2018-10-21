import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
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
