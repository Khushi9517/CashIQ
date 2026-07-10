import { FaEdit, FaTrash } from "react-icons/fa";

function ExpenseItem({ expense, onDelete, onEdit })  {

    const formattedDate = new Date(expense.date).toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }
    );

    return (

        <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div className="flex justify-between items-center">

                <div>

                    <h2 className="text-xl font-semibold text-slate-800">

                        {expense.title}

                    </h2>

                    <div className="flex items-center gap-3 mt-3">

                        <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">

                            {expense.category}

                        </span>

                        <span className="text-slate-400 text-sm">

                            {formattedDate}

                        </span>

                    </div>

                </div>

                <div className="text-right">

                    <h1 className="text-2xl font-bold text-indigo-600">

                        ₹{expense.amount}

                    </h1>

                    <div className="flex justify-end gap-3 mt-4">

                        <button 
                        onClick={() => onEdit(expense)}
                        className="bg-emerald-100 text-emerald-600 p-3 rounded-xl hover:bg-emerald-200 transition">

                            <FaEdit />

                        </button>

                        <button
                            onClick={() => onDelete(expense._id)}
                            className="bg-red-100 text-red-600 p-3 rounded-xl hover:bg-red-200 transition"
                        >

                            <FaTrash />

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ExpenseItem;