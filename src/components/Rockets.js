import { useEffect } from 'react';

const Rockets = () => {
    const fetchingCapsules = async () => {
        const response = await fetch('https://api.spacexdata.com/v3/rockets')
        const data = await response.json()
        console.log(data)
    }
    useEffect(() => {
        fetchingCapsules()
    }, [])
    return (
        <div>
            Capsules
        </div>
    );
}

export default Rockets;
