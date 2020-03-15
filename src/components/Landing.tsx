import React from 'react';
import { Link } from 'react-router-dom'
import img from '../images/centrestreet.jpg'

function Landing() {
    return (
        <section className="content-container">
            <div className="landing-container">
                <div id="landing__title">
                    <h1 >Home & Communities</h1>
                    <div id="landing__ctas">
                        <Link to="/communities" className="button button-lg">Browse Communities</Link>
                    </div>
                </div>
                <div id="landing__image">
                    <img src={img}></img>
                </div>
            </div>
        </section>
    );
}

export default Landing;