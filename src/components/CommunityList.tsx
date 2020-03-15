import React from 'react'
import { NavLink } from 'react-router-dom'
import Community from './Community'
import CommunitiesService from '../services/CommunitiesService'

export default function Communities() {
    const communities = CommunitiesService();
    console.log(communities)

    return (
        <section>
            <div className="section-navbar">
                <NavLink to="/">H&C</NavLink>
            </div>
            <div className="content-container communities">
                <h2>Communities</h2>

                <div className="community-content">
                    <div className="communities-list">
                        {communities.map(c => (
                            <Community community={c} />
                        ))}
                    </div>

                    <div className="sidebar">

                    </div>
                </div>
            </div>

        </section>
    )
}