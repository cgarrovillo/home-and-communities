import { useEffect, useState } from 'react'
import { HomeInterface } from '../interfaces/HomeInterface';

export default function HomesService() {
    const [homes, setHomes] = useState<HomeInterface[]>([]);
    useEffect(() => {
        fetch("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes")
            .then(response => response.json())
            .then(data => {
                setHomes(data);
            })
            .catch(err => console.log(err));
    }, [])

    return homes;
}