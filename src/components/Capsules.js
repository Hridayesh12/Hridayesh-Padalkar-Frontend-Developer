import { useEffect, useState } from 'react'
import SearchForm from './SearchForm';
import IndividualCapsule from './IndividualCapsule';
const Capsules = () => {
    const [data, setData] = useState([]);
    const fetchingCapsules = async () => {
        const response = await fetch('https://api.spacexdata.com/v3/capsules')
        const resp = await response.json()
        setData(resp)
    }
    console.log(data);
    useEffect(() => {
        fetchingCapsules()
    }, [])
    return (
        <div>
            {data ? <>
                <SearchForm data={data} />
                <h3 className="text-center text-[3rem] font-medium my-4 text-transparent bg-clip-text bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end">
                    All Capsules
                </h3>
                <div id='capsule' className='grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-10 items-center justify-center p-10'>
                    {data.map((item) => (
                        <IndividualCapsule item={item} />
                    ))}
                </div>
            </> : <></>}
        </div>
    );
}

export default Capsules;
