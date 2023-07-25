import { useState } from 'react';
import CapsuleDetails from './CapsuleDetails';
const IndividualCapsule = ({ item }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='hover:scale-[1.1]  transition-all min-h-[100%] rounded-lg text-[1.2rem] flex flex-col items-justify px-5 justify-center bg-[#373737] text-gray-500'>
            <h1 className='text-[1.5rem] text-white'> {item.capsule_serial}, <span>{item.capsule_id}</span></h1>

            <h2 className='text-white py-2'>{item.details}</h2>
            <button onClick={() => { setShowModal(!showModal) }}>Know More</button>
            {
                showModal ? <CapsuleDetails item={item} /> : ""
            }
        </div>
    );
}

export default IndividualCapsule;
