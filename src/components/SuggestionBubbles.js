import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

class SuggestionBubbles extends Component {
    
    componentDidMount() {
        store.subscribe(() => {
            const getSuggestionBubbles = document.querySelectorAll('div.suggestion-bubble');
            getSuggestionBubbles.forEach((item) => {
                item.style.background = store.getState().Actions.rBckgAvgColor;
            });
        });
    }

    render() {
        return(
            <div className="suggestions-wrapper">
                <div className="suggestions">
                    <div className="suggestion-bubble">How many calories in a banana?</div>
                    <div className="suggestion-bubble">How many calories in a banana?</div>
                </div>
                <div className="suggestions">
                    <div className="suggestion-bubble">How many calories in a banana?</div>
                    <div className="suggestion-bubble">How many calories in a banana?</div>
                    <div className="suggestion-bubble">How many calories in a banana?</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(SuggestionBubbles);