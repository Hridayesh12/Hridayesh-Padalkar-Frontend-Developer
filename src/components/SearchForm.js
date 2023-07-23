import { useState, useEffect } from 'react'
import CapsuleTables from './CapsuleTables';

const SearchForm = ({ data }) => {
    const [status, setStatus] = useState([]);
    const [type, setType] = useState([]);
    const [showStatus, setShowStatus] = useState(false);
    const [showType, setShowType] = useState(false);
    const [searchParams, setSearchParams] = useState({
        type: "Type",
        status: "Status",
        original_launch: "",
    });
    const [result, setResult] = useState(null);
    const UpdateData = (value, type) => {
        if (type === "original_launch") {
            value = value.concat(":00:000Z")
        }
        setSearchParams({ ...searchParams, [type]: value })
    }
    const Search = () => {
        if (searchParams.type === "Type" && searchParams.status === "Status" && searchParams.original_launch !== "") {
            setResult(data.filter((item) => {
                return item.original_launch === searchParams.original_launch
            }))
        }
        else if (searchParams.type === "Type" && searchParams.status !== "Status" && searchParams.original_launch === "") {
            setResult(data.filter((item) => {
                return item.status === searchParams.status
            }))
        }
        else if (searchParams.type !== "Type" && searchParams.status === "Status" && searchParams.original_launch === "") {
            setResult(data.filter((item) => {
                return item.type === searchParams.type
            }))
        }
        else if (searchParams.type === "Type" && searchParams.status !== "Status" && searchParams.original_launch !== "") {
            setResult(data.filter((item) => {
                return item.status === searchParams.status && item.original_launch === searchParams.original_launch
            }))
        }
        else if (searchParams.type !== "Type" && searchParams.status === "Status" && searchParams.original_launch !== "") {
            setResult(data.filter((item) => {
                return item.type === searchParams.type && item.original_launch === searchParams.original_launch
            }))
        }
        else if (searchParams.type !== "Type" && searchParams.status !== "Status" && searchParams.original_launch === "") {
            setResult(data.filter((item) => {
                return item.type === searchParams.type && item.status === searchParams.status
            }))
        }
        else if (searchParams.type !== "Type" && searchParams.status !== "Status" && searchParams.original_launch !== "") {
            setResult(data.filter((item) => {
                return item.type === searchParams.type && item.status === searchParams.status && item.original_launch === searchParams.original_launch
            }))
        }
        else {
            setResult([])
        }
    }
    useEffect(() => {
        setType(...type, [...new Set(data.map((item) => {
            return item.type
        }))]);
        setStatus(...status, [...new Set(data.map((item) => {
            return item.status
        }))]);
    }, [data])
    console.log(type, status);
    return (
        <div className='bg-[#121212] pt-8'>
            <h3 className="text-center text-[3rem] font-medium text-white mb-8">
                Search Capsules
            </h3>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-14 lg:gap-x-24 px-10 sm:px-20">
                <div className="mb-8 flex flex-row gap-2 justify-between items-center text-sm sm:text-base text-white font-medium">
                    <label>Type :</label>
                    <div className="relative text-left inline-block w-7/12">
                        <div>
                            <button
                                onClick={() => {
                                    setShowType(!showType);
                                }}
                                className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                            >
                                {searchParams.type}
                                {showType ? (
                                    ""
                                ) : (
                                    <svg
                                        className="-mr-1 ml-2 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {showType ? (
                            <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {
                                        type.map((value, x) => (
                                            <button
                                                key={x}
                                                onClick={() => {
                                                    UpdateData(value, "type");
                                                    setShowType(!showType);
                                                }}
                                                className="text-gray-700 block px-4 py-2 text-xs sm:text-sm hover:text-accent hover:bg-gray-200 w-full text-left"
                                            >
                                                {value}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="mb-8 flex flex-row gap-2 justify-between items-center text-sm sm:text-base text-white font-medium">
                    <label>Status :</label>
                    <div className="relative text-left inline-block w-7/12">
                        <div>
                            <button
                                onClick={() => {
                                    setShowStatus(!showStatus);
                                }}
                                className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                            >
                                {searchParams.status}
                                {showStatus ? (
                                    ""
                                ) : (
                                    <svg
                                        className="-mr-1 ml-2 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {showStatus ? (
                            <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {
                                        status.map((value, x) => (
                                            <button
                                                key={x}
                                                onClick={() => {
                                                    UpdateData(value, "status");
                                                    setShowStatus(!showStatus);
                                                }}
                                                className="text-gray-700 block px-4 py-2 text-xs sm:text-sm hover:text-accent hover:bg-gray-200 w-full text-left"
                                            >
                                                {value}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="mb-8 flex flex-row gap-2 justify-between items-center text-sm sm:text-base text-white font-medium">
                    <label>Original Launch :</label>
                    <input
                        className="rounded-md border border-gray-300 py-1 px-1 w-7/12"
                        type="datetime-local" onChange={(e) => { UpdateData(e.target.value, "original_launch") }}
                    ></input>
                </div>
                <div className="mb-8 flex flex-row gap-2 justify-between items-center text-sm sm:text-base text-white font-medium">
                    <button
                        className="p-2 w-fit mx-auto px-8 py-2 bg-blue-700 rounded-md text-white hover:scale-105 transition-all"
                        onClick={() => { setSearchParams({ type: "Type", status: "Status", original_launch: "" }); setResult(null) }}
                    >
                        Reset
                    </button>
                    <button
                        className="p-2 w-fit mx-auto px-8 py-2 bg-red-700 rounded-md text-white hover:scale-105 transition-all"
                        onClick={Search}
                    >
                        Search
                    </button>
                </div>
            </div>
            {result ? <div className='flex items-center justify-center'>
                {result.length === 0 ? <h2 className='text-[1rem] my-3'>No Capsule Found</h2> :
                    <CapsuleTables item={result} />
                }
            </div> : ""}
        </div>

    )
}

export default SearchForm