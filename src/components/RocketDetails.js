import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function RocketDetails({ item }) {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#373737] text-left shadow-xl transition-all sm:w-full sm:max-w-3xl">
                                <div className='px-16 py-8 max-width grid grid-cols-1 gap-8 md:grid-cols-2'>
                                    <div>
                                        <h1 className='font-bold text-2xl text-white'>{item.rocket_name}</h1>
                                        <h2 className='capitalize text-xl mt-2 opacity-75 text-white'>Type: {item.rocket_type}</h2>
                                        <h2 className='text-xl mt-2 opacity-75 text-white mb-8'>First Flight Date: {item.first_flight}</h2>
                                        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 text-white opacity-75'>
                                            <ul>
                                                <li>Cost Per Launch: {item.cost_per_launch}</li>
                                                <li>Company: {item.company}</li>
                                                <li>Success Rate: {item.success_rate_pct}%</li>
                                                <li>{item.active ? <span className='text-green-700'>Active</span> : <span className='text-red-700'>Inactive</span>}</li>
                                            </ul>
                                            <ul>
                                                <li>Country: {item.country}</li>
                                                <li>Stages: {item.stages}</li>
                                                <li>Height: {item.height.meters} m</li>
                                                <li>Diameter: {item.diameter.meters} m</li>
                                                <li>Mass. {item.mass.kg}</li>
                                            </ul>
                                        </div>
                                        <p className='text-white py-2 text-justify'>{item.description}</p>
                                    </div>
                                    <div>
                                        <img className='w-64 h-64' src={item.flickr_images[0]} alt="" />
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-[#373737] px-3 py-2 text-sm font-semibold text-white hover:text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}