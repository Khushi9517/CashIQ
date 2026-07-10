import { useEffect, useState } from "react";
import API from "../api/axios";

import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseBarChart from "../components/ExpenseBarChart";
import ExpensePieChart from "../components/ExpensePieChart";

import {
    FaWallet,
    FaMoneyBill,
    FaChartPie,
} from "react-icons/fa";

function Dashboard() {

    const [dashboardData, setDashboardData] = useState(null);
    const [expenses, setExpenses] = useState([]);
    const [selectedExpense, setSelectedExpense] = useState(null);

    const hour = new Date().getHours();

    let greeting = "Good Evening 🌙";

    if (hour < 12) {
        greeting = "Good Morning ☀️";
    } else if (hour < 17) {
        greeting = "Good Afternoon 🌤️";
    }

    const fetchDashboard = async () => {

        try {

            const res = await API.get("/dashboard");

            setDashboardData(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    const fetchExpenses = async () => {

        try {

            const res = await API.get("/expenses");

            setExpenses(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    const deleteExpense = async (id) => {

        try {

            await API.delete(`/expenses/${id}`);

            fetchDashboard();
            fetchExpenses();

        } catch (error) {

            console.log(error);

        }

    };
    const editExpense = (expense) => {

    setSelectedExpense(expense);

};

    useEffect(() => {

        fetchDashboard();
        fetchExpenses();

    }, []);

return (

    <div className="min-h-screen bg-slate-100 p-8">

        <Navbar />

        <div className="mt-10">

            <h1 className="text-5xl font-bold text-slate-800">

                {greeting} 👋

            </h1>

            <p className="text-slate-500 text-lg mt-3">

                Welcome back! Here's your financial overview.

            </p>

        </div>

        {/* Summary Cards */}

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
                value={dashboardData?.categorySummary?.[0]?.category || "None"}
                icon={<FaChartPie />}
                color="bg-orange-500"
            />

        </div>

        {/* Analytics */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

            <ExpenseBarChart
                data={dashboardData?.monthlySummary || []}
            />

            <ExpensePieChart
                data={dashboardData?.categorySummary || []}
            />

        </div>

        {/* Expense Form */}

        <div className="mt-10">

            <ExpenseForm
                fetchDashboard={fetchDashboard}
                fetchExpenses={fetchExpenses}
                selectedExpense={selectedExpense}
                setSelectedExpense={setSelectedExpense}
            />

        </div>

        {/* Expense List */}

        <ExpenseList
            expenses={expenses}
            onDelete={deleteExpense}
            onEdit={editExpense}
        />

    </div>

);

}

export default Dashboard;