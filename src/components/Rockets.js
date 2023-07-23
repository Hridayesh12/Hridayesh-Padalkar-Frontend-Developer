import { useEffect, useState } from 'react';

const Rockets = () => {
    const [rocket, setRocket] = useState();
    const fetchingCapsules = async () => {
        const response = await fetch('https://api.spacexdata.com/v3/rockets')
        const data = await response.json()
        setRocket(data)
    }
    useEffect(() => {
        fetchingCapsules()
    }, [rocket])
    return (
        <div>
            Capsules
        </div>
    );
}

export default Rockets;
