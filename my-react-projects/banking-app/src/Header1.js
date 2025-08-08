function Header1() {
    return (
        <div>
        <ul className="flex justify-center gap-8 bg-blue-600 text-white py-4 shadow-lg">
            <li className="cursor-pointer hover:text-yellow-300 transition-colors duration-300">Home</li>
        </ul>
        <ul className="flex justify-center gap-8 bg-blue-600 text-white py-4 shadow-lg">
                <li className="cursor-pointer hover:text-yellow-300 transition-colors duration-300">CreateAccount</li>
                <li className="cursor-pointer hover:text-yellow-300 transition-colors duration-300">Login</li>
            </ul>
            </div>
    )
}
export default Header1
