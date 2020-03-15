import React from 'react'
import { CommunityInterface } from '../interfaces/CommunityInterface';

export default function CommunitySummary(props: any) {
    const c: CommunityInterface = props.community;
    return (
        <div className="modal fade">
            <img className="card-img-top" src={c.imgUrl} alt=""></img>
            <div className="modal-content">
                <h3 className="card-title">{c.name}</h3>
                <h4 className="community__price"></h4>
            </div>
        </div>
    )
}