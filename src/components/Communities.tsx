import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import Community from './Community'
import CommunitiesService from '../services/CommunitiesService'
import CommunitySummary from './Home';

export default function Communities() {
    const communities = CommunitiesService();
    console.log(communities)

    return (
        <section>
            <div className="section-navbar">
                <NavLink to="/">H&C</NavLink>
            </div>
            <div className="content-container communities">
                <h2 className="d-flex justify-content-center">Communities</h2>

                <div className="community-content">
                    <div className="communities-list">
                        {communities.map(c => (
                            <Community community={c} />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}