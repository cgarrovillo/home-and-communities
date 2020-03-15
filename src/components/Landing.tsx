import React from 'react';
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <section className="content-container">
            <div id="landing__title">
                <h1 >Houses & Communities</h1>
                <div className="landing__ctas">
                    <Link to="/communities" className="button button-lg" href="#">Browse Communities</Link>
                </div>
            </div>
        </section>
    );
}

export default Landing;