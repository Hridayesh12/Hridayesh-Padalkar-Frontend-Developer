import { useEffect, useState } from 'react';
import IndividualRocket from './IndividualRocket';
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
        <div id='rocket' className='bg-[#121212] max-width'>
            <h3 className="text-center text-[3rem] font-medium my-4 text-transparent bg-clip-text bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end">
                All Rockets
            </h3>
            <div id='capsule' className='max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center  px-5'>
                {rocket.map((item) => (
                    <IndividualRocket item={item} />
                ))}
            </div>
        </div>
    );
}

export default Rockets;
