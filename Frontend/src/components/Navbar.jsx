import { FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {

        logout();
        navigate("/login");

    };

    return (

        <nav className="bg-white shadow-md rounded-2xl p-5 flex justify-between items-center">

            <div className="flex items-center gap-3">

                <div className="bg-indigo-600 text-white p-3 rounded-xl">

                    <FaWallet size={22} />

                </div>

                <div>

                    <h1 className="text-2xl font-bold text-slate-800">

                        CashIQ

                    </h1>

                    <p className="text-sm text-slate-500">

                        Smart Expense Tracker

                    </p>

                </div>

            </div>

            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition-all duration-300"
            >

                Logout

            </button>

        </nav>

    );

}

export default Navbar;