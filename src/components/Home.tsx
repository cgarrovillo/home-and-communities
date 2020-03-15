import React from 'react'
import { HomeInterface } from '../interfaces/HomeInterface';

export default function Home(props: any) {
    const home: HomeInterface = props.home
    return (
        <li className="home">
            <div className="">{home.type}</div>
            <div className="">{home.area} sqft.</div>
            <div className="">{home.price.toLocaleString('en-us', { style: "currency", currency: "USD" })}</div>
        </li>
    )
}