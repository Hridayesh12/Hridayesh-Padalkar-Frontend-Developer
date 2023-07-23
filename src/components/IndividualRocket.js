import RocketDetails from './RocketDetails'
import { useState } from 'react'
const IndividualRocket = ({ item }) => {
    // console.log(item);
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="bg-black rounded-lg">
            <img src={item.flickr_images[0]} alt="rocket" className='rounded-lg w-[100%] h-64 object-cover' />
            <div className='p-5'>
                <h1 className='text-[1.5rem] text-white'> {item.rocket_name}</h1>

                <h2 className='text-white py-2 text-justify'>{`${item.description.substring(0, 200)}...`}</h2>
                <button onClick={() => { setShowModal(!showModal) }} className='bg-[#373737] text-white px-5 py-2 rounded-lg'>Know More</button>
                {
                    showModal ? <RocketDetails item={item} /> : ""
                }
            </div>
        </div>
    )
}

export default IndividualRocket