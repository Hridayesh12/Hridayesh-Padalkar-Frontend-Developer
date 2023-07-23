const IndividualRocket = ({ item }) => {
    console.log(item)
    return (
        <div className="bg-black">
            <img src={item.flickr_images[0]} alt="" className='w-[100%] h-64 object-cover' />
            <div className='p-5'>
                <h1 className='text-[1.5rem] text-white'> {item.rocket_name}</h1>

                {/* <h2>Reused {item.reuse_count} times</h2>
            <h2>Missions: {item.missions.length}</h2>
            <h2>Landings: {item.landings}</h2> */}
                <h2 className='text-white py-2 text-justify'>{`${item.description.substring(0, 200)}...`}</h2>
                <button className='bg-[#373737] text-white px-5 py-2 rounded-lg'>Know More</button>
                {/* <button onClick={() => { setShowModal(!showModal) }}>Know More</button>
            {
                showModal ? <Details item={item} /> : ""
            } */}
            </div>
        </div>
    )
}

export default IndividualRocket