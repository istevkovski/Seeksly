import React, {Component} from 'react';

class Preloader extends Component {
    render() {
        return(
            <section className="preloader dark">
                <div className="spinner">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </section>
        );
    }
}

export default Preloader;