import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../store';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.searchButton = React.createRef();
    }

    componentDidMount() {
        store.subscribe(() => {
            this.searchButton.current.style.background = store.getState().Actions.rBckgAvgColor;
        });
    }

    render() {
        return (
            <div className="search-bar-wrapper">
                <div className="search-bar">
                    <div className="search-input-wrapper">
                        <input id="search-input" className="search-input" type="text" />
                        <label htmlFor="search-input" className="search-input__label">Search</label>
                    </div>
                    <button ref={this.searchButton} className="btn-search"><img src="./assets/images/magnifying-glass.svg" alt="magnifying-glass" /></button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(SearchBar);