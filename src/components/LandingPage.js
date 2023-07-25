import '../App.css'
const LandingPage = () => {
    return (
        <div className='h-[92vh] bg-hero bg-clip-padding bg-cover full flex flex-col text-center md:text-left md:flex-row'>
            <div className="w-full md:w-[55%] flex flex-col gap-10 xl:gap-12 md:gap-8 py-16 px-5 sm:px-16 xl:p-24">
                <h3 className="font-medium font-heading text-[2rem] md:text-[10rem] text-transparent bg-clip-text bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end">
                    SpaceX
                </h3>
                <div className='textAnimation'>
                    <ul className='typingTxt'>
                        <li>
                            <span>Embark on a SpaceX Adventure...</span>
                        </li>
                        <li>
                            <span>Your Gateway to Space Join Us...</span>
                        </li>
                        <li>
                            <span>Redefining Space Exploration...</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LandingPage