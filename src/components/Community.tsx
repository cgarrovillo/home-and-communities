import React from 'react'
import { CommunityInterface } from '../interfaces/CommunityInterface'

export default function Community(props: any) {
    const c: CommunityInterface = props.community;

    return (
        <div className="community">
            {/* <img className="" src={c.imgUrl} alt=""></img> */}
            <h3>{c.name}</h3>
            <h4> Average Home Price: {c.avgPrice}</h4>
        </div>
    )
}