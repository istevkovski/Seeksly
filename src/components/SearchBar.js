import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {updateSearchTerm, searchAutocomplete} from '../actions/Types';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.timeout = 0;
        this.searchInput = React.createRef();
        this.searchButton = React.createRef();
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        window.location.href = `https://google.com/search?q=${this.searchInput.current.value}`;
    }

    handleSearchInputChange() {
        store.dispatch(updateSearchTerm(this.searchInput.current.value));
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            if(store.getState().updateSearchTerm.searchTerm !== undefined && store.getState().updateSearchTerm.searchTerm !== ''){
                fetch(`https://cors-escape.herokuapp.com/http://suggestqueries.google.com/complete/search?client=firefox&q=${store.getState().updateSearchTerm.searchTerm}`)
                    .then(promise => {
                        return promise.json();
                    })
                    .then(promiseJSON => {
                        store.dispatch(searchAutocomplete(promiseJSON[1].slice(0, 5)));
                    });
            }
        }, 750);
    }

    componentDidMount() {
        store.subscribe(() => {
            this.searchButton.current.style.background = store.getState().Actions.rBckgAvgColor;
        });
    }

    componentDidUpdate() {
        
    }

    render() {
        return (
            <div className="search-bar-wrapper">
                <form onSubmit={this.handleFormSubmit} className="search-bar" autoComplete="off">
                    <div className="search-input-wrapper">
                        <input ref={this.searchInput} value={store.getState().updateSearchTerm.searchTerm} onChange={this.handleSearchInputChange} id="search-input" className="search-input" type="text" />
                        <label htmlFor="search-input" className={`search-input__label ${(store.getState().updateSearchTerm.searchTerm ? 'hasSearchTerm' : '')}`}>Search</label>
                    </div>
                    <button ref={this.searchButton} className="btn-search"><img src="./assets/images/magnifying-glass.svg" alt="magnifying-glass" /></button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = {
    updateSearchTerm,
    searchAutocomplete
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);