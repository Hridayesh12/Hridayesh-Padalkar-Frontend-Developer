const Navbar = () => {
    return (
        <nav className="w-full flex justify-between items-center px-8 sm:px-12 py-4">
            <h2>SpaceX</h2>
            <ul className="text-content flex list-none flex-row justify-between items-center ">
                <li className="mx-4 cursor-pointer hover:underline transition-all">
                    <a href='#rocket'>Rockets</a>
                </li>
                <li className="mx-4 cursor-pointer hover:underline transition-all">
                    <a href='#capsule'>Capsules</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar