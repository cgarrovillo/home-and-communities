import React, { useState } from 'react'
import { CommunityInterface } from '../interfaces/CommunityInterface'
import Home from './Home';

export default function Community(props: any) {
    const c: CommunityInterface = props.community;
    return (
        <div className="community card">
            <img className="card-img-top" src={c.imgUrl} alt=""></img>
            <h3>{c.name}</h3>
            <h4>{c.avgPrice}</h4>
            <ul className="list-group community__homes">
                {c.homes.map(home => (
                    <Home home={home} />
                ))}
            </ul>

        </div>
    )
}