import { useEffect, useState } from 'react'
import { CommunityInterface } from '../interfaces/CommunityInterface';
import HomesService from './HomesService';

export default function CommunitiesService() {
    const [communities, setCommunities] = useState<CommunityInterface[]>([]);
    const homes = HomesService();

    useEffect(() => {
        fetch("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities")
            .then(response => response.json())
            .then(data => {
                setCommunities(data);
            })
            .catch(err => console.log(err));
    }, [])
    communities.sort((a, b) => a.name.localeCompare(b.name));
    communities.map(community => {
        community.homes = homes.filter(home => community.id === home.communityId);
        community.avgPrice = getAvgPrice(community);
    })
    return communities;
}

/**
 * Gets the average price of all homes in a community
 * @param community The community Object containing an array of Homes
 */
function getAvgPrice(community: CommunityInterface) {
    let priceText = "";
    const sum = community.homes.reduce((avg, home) => avg + home.price, 0);
    const avg = sum / community.homes.length;

    const avgDisplay = Math.floor(avg / 100000) * 100;
    const roundedAvg = Math.round(avg / 100000) * 100000;
    if (roundedAvg > avg) {
        priceText = "High $" + avgDisplay + "'s";
    }
    else {
        // avg = Math.floor(avg);
        priceText = "Low $" + avgDisplay + "'s";
    }

    return priceText;
}
