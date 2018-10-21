import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

class SuggestionBubbles extends Component {
    
    componentDidMount() {
        store.subscribe(() => {
            const getSuggestionBubbles = document.querySelectorAll('.suggestion-bubble');
            getSuggestionBubbles.forEach((item) => {
                item.style.background = store.getState().Actions.rBckgAvgColor;
            });
        });
    }

    render() {
        return(
            <div className="suggestions-wrapper">
                <div className="suggestions">
                    {
                        store.getState().searchAutocomplete.autocompleteDataArray.map((item, index) => {
                            if(index < 2)
                                return <a href={`https://google.com/search?q=${item}`} key={`suggestionBubble${index}`} className="suggestion-bubble">{item}</a>
                            return undefined;
                        })
                    }
                    {/* <div className="suggestion-bubble">{store.getState().searchAutocomplete.autocompleteDataArray[0]}</div> */}
                    {/* <div className="suggestion-bubble">{store.getState().searchAutocomplete.autocompleteDataArray[1]}</div> */}
                </div>
                <div className="suggestions">
                    {
                        store.getState().searchAutocomplete.autocompleteDataArray.map((item, index) => {
                            if(index >= 2)
                                return <a href={`https://google.com/search?q=${item}`} key={`suggestionBubble${index}`} className="suggestion-bubble">{item}</a>
                            return undefined;
                        })
                    }
                    {/* <div className="suggestion-bubble">{store.getState().searchAutocomplete.autocompleteDataArray[2]}</div> */}
                    {/* <div className="suggestion-bubble">{store.getState().searchAutocomplete.autocompleteDataArray[3]}</div> */}
                    {/* <div className="suggestion-bubble">{store.getState().searchAutocomplete.autocompleteDataArray[4]}</div> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(SuggestionBubbles);