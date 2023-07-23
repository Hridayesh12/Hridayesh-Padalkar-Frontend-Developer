import { useState } from 'react';
import Details from './Details';
const IndividualCapsule = ({ item }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='hover:scale-[1.1]  min-h-[100%] rounded-lg text-[1.2rem] flex flex-col items-justify px-5 justify-center bg-[#373737] text-gray-500'>
            <h1 className='text-[1.5rem] text-white'> {item.capsule_serial}, <span>{item.capsule_id}</span></h1>
            <h2>Reused {item.reuse_count} times</h2>
            <h2>Missions: {item.missions.length}</h2>
            <h2>Landings: {item.landings}</h2>
            <h2>Status: {item.status === 'active' ? <span className='text-green-500'>{item.status}</span> : item.status === "unknown" ? <>{item.status} </> : item.status === 'retired' || item.status === 'destroyed' ? <span className='text-red-500'>{item.status}</span> : ""}</h2>
            <h2 className='text-white py-2'>{item.details}</h2>
            <button onClick={() => { setShowModal(!showModal) }}>Know More</button>
            {
                showModal ? <Details item={item} /> : ""
            }
        </div>
    );
}

export default IndividualCapsule;
