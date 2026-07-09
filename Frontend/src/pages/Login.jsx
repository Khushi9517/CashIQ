import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const res = await API.post("/auth/login", {

                email,

                password,

            });

            login(res.data.token);

            navigate("/dashboard");

        } catch (error) {

            alert(error.response?.data?.message || "Login Failed");

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

                    Welcome Back 👋

                </h2>

                <p className="text-slate-500 mb-8">

                    Sign in to continue

                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div className="relative">

                        <FaEnvelope className="absolute left-4 top-4 text-slate-400" />

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />

                    </div>

                    <div className="relative">

                        <FaLock className="absolute left-4 top-4 text-slate-400" />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />

                    </div>

                    <button

                        type="submit"

                        disabled={loading}

                        className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg"

                    >

                        {

                            loading ?

                            "Signing In..."

                            :

                            "Login"

                        }

                    </button>

                </form>

                <p className="text-center mt-8 text-slate-500">

                    Don't have an account?

                    <Link

                        to="/register"

                        className="ml-2 text-indigo-600 font-semibold"

                    >

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;