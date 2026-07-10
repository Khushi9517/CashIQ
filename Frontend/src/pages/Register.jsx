import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";

import API from "../api/axios";

function Register() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            await API.post("/auth/register", {
                name,
                email,
                password,
            });

            toast.success("Account Created Successfully!");

            navigate("/login");

        } catch (error) {

            toast.error(error.response?.data?.message || "Registration Failed");

        }

        setLoading(false);

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-cyan-100 p-6">

            <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10">

                <div className="text-center mb-10">

                    <h1 className="text-5xl font-bold text-indigo-600">

                        CashIQ

                    </h1>

                    <p className="text-slate-500 mt-3">

                        Smart Finance. Smarter You.

                    </p>

                </div>

                <h2 className="text-2xl font-semibold text-slate-800 mb-2">

                    Create Account 🚀

                </h2>

                <p className="text-slate-500 mb-8">

                    Join CashIQ and start tracking your expenses.

                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div className="relative">

                        <FaUser className="absolute left-4 top-4 text-slate-400" />

                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                            required
                        />

                    </div>

                    <div className="relative">

                        <FaEnvelope className="absolute left-4 top-4 text-slate-400" />

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                            required
                        />

                    </div>

                    <div className="relative">

                        <FaLock className="absolute left-4 top-4 text-slate-400" />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg"
                    >

                        {

                            loading

                                ? "Creating Account..."

                                : "Create Account"

                        }

                    </button>

                </form>

                <p className="text-center mt-8 text-slate-500">

                    Already have an account?

                    <Link
                        to="/login"
                        className="ml-2 text-indigo-600 font-semibold"
                    >

                        Login

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Register;