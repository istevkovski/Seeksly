import React, { Component } from 'react';

class NewsBar extends Component {
    constructor() {
        super();
        this.state = {
            location: '',
            news: ''
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch(`https://ipapi.co/json/`);
            const json = await response.json();
            const countryCode = json.country.toLowerCase();
            if(countryCode === 'mk')
                this.setState({ location: 'bg' });
            else
                this.setState({ location: countryCode });
        } catch (error) {
            console.log(error);
        }

        const url = `https://newsapi.org/v2/top-headlines?country=${this.state.location}&pageSize=1&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        fetch(url).then((response) => {
            response.json().then((data) => {
                this.setState({news: data.articles[0].title});
            });               
        });
    } //endOf async componentDidMount

    render() {
        return (
            <div className="news-bar">
                <p className="news-bar-text">{this.state.news}</p>
            </div>
        );
    }
}

export default NewsBar;
