import { useEffect, useState } from "react";
import API from "../api/axios";
import toast from "react-hot-toast";

function ExpenseForm({
    fetchDashboard,
    fetchExpenses,
    selectedExpense,
    setSelectedExpense,
}) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

    if (selectedExpense) {

        setTitle(selectedExpense.title);

        setAmount(selectedExpense.amount);

        setCategory(selectedExpense.category);

        setDate(selectedExpense.date.split("T")[0]);

    }

}, [selectedExpense]);

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log("Form Submitted");
        console.log(selectedExpense);
        setLoading(true);

        try {

            if (selectedExpense) {

    await API.put(`/expenses/${selectedExpense._id}`, {
        title,
        amount,
        category,
        date,
    });

    toast.success("Expense Updated Successfully");

} else {

    await API.post("/expenses", {
        title,
        amount,
        category,
        date,
    });

    toast.success("Expense Added Successfully");

}

            setTitle("");
            setAmount("");
            setCategory("");
            setDate("");
            setSelectedExpense(null);

            fetchDashboard();
            fetchExpenses();

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message || "Something went wrong"
            );

        }finally{
            setLoading(false);
        }

    };

    return (

    <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="mb-8">

            <h2 className="text-3xl font-bold text-slate-800">

                {
                   selectedExpense
                        ? "Update Expense"
                        : "Add New Expense"
                }

            </h2>

            <p className="text-slate-500 mt-2">

                Record your spending to keep your finances organized.

            </p>

        </div>

        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >

            <input
                type="text"
                placeholder="Expense Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />

            <input
                type="number"
                placeholder="Amount (₹)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            >
                <option value="">Select Category</option>
                <option>Food</option>
                <option>Travel</option>
                <option>Shopping</option>
                <option>Entertainment</option>
                <option>Bills</option>
                <option>Health</option>
                <option>Other</option>
            </select>

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
                {
        selectedExpense
            ? "Update Expense"
            : "+ Add Expense"
    }
            </button>

        </form>

    </div>

);

}

export default ExpenseForm;