import { FaWallet, FaSignOutAlt, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { logout } = useAuth();

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) greeting = "Good Morning";
    else if (hour < 17) greeting = "Good Afternoon";

    const handleLogout = () => {

        logout();

        navigate("/login");

    };

    return (

        <nav className="bg-white rounded-3xl shadow-lg px-8 py-5 flex justify-between items-center">

            <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-lg">

                    <FaWallet size={24}/>

                </div>

                <div>

                    <h1 className="text-3xl font-bold text-slate-800">

                        CashIQ

                    </h1>

                    <p className="text-slate-500">

                        {greeting} 👋

                    </p>

                </div>

            </div>

            <div className="flex items-center gap-5">

                <button className="w-12 h-12 rounded-full bg-slate-100 hover:bg-indigo-100 transition flex items-center justify-center">

                    <FaBell className="text-indigo-600"/>

                </button>

                <button

                    onClick={handleLogout}

                    className="bg-gradient-to-r from-red-500 to-red-600 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg"

                >

                    <FaSignOutAlt/>

                    Logout

                </button>

            </div>

        </nav>

    );

}

export default Navbar;