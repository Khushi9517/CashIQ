import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import { useEffect, useState } from "react";
import API from "../api/axios";

import {

    FaWallet,

    FaMoneyBill,

    FaChartPie

} from "react-icons/fa";

function Dashboard() {

    const [dashboardData, setDashboardData] = useState(null);

const hour = new Date().getHours();

let greeting = "Good Evening 🌙";

if (hour < 12) {

    greeting = "Good Morning ☀️";

}

else if (hour < 17) {

    greeting = "Good Afternoon 🌤️";

}

useEffect(() => {

    fetchDashboard();

}, []);

const fetchDashboard = async () => {

    try {

        const token = sessionStorage.getItem("token");

        const res = await API.get("/dashboard", {

            headers: {

                Authorization: `Bearer ${token}`

            }

        });

        setDashboardData(res.data);

    }

    catch (error) {

        console.log(error);

    }

};

    return (

        <div className="min-h-screen bg-slate-100 p-8">

            <Navbar />

            <div className="mt-8">

                <h1 className="text-4xl font-bold text-slate-800">

                    {greeting}, Khushi 👋

                </h1>

                <p className="text-slate-500 mt-2">

                    Here's your financial overview.

                </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">

                <SummaryCard

                    title="Total Expenses"

                    value={`₹${dashboardData?.totalExpenses || 0}`}

                    icon={<FaWallet />}

                    color="bg-indigo-600"

                />

                <SummaryCard

                    title="Transactions"

                    value={dashboardData?.totalTransactions || 0}

                    icon={<FaMoneyBill />}

                    color="bg-emerald-500"

                />

                <SummaryCard

                    title="Top Category"

                    value={dashboardData?.categorySummary?.[0]?._id || "None"}
                    icon={<FaChartPie />}

                    color="bg-orange-500"

                />

            </div>

        </div>

    );

}

export default Dashboard;