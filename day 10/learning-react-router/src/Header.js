import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="flex bg-blue-300 p-5 justify-between">
                <div>
                    <Link to="/home">
                    {/* left section */}
                    <button class="text-white font-bold">Home</button>
                    </Link>
                </div>
                <div className="space-x-10">
                    {/* right section */}
                   <Link to="/profile"> <button class="text-white font-bold">Profile</button> </Link>
                   <Link to="/friends">
                    <button class="text-white font-bold">My Friends</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;