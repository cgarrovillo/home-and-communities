import React, { useState } from 'react'
import { CommunityInterface } from '../interfaces/CommunityInterface'
import Home from './Home';

export default function Community(props: any) {
    const [error, setError] = useState('');

    const c: CommunityInterface = props.community;
    if (c.avgPrice == null) {
        setError('Price Not Available')
    }
    if (c.group == null) {
        setError('Group Not Available')
    }
    if (c.homes == null) {
        setError('Price Not Available')
    }
    if (c.id == null) {
        setError('Price Not Available')
    }
    if (c.imgUrl == null) {
        setError('Price Not Available')
    }
    if (c.homes == null) {
        setError('Price Not Available')
    }

    return (
        <div className="community card">
            <img className="card-img-top" src={c.imgUrl} alt="Image Not Available"></img>
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
