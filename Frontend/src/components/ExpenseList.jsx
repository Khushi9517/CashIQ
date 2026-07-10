import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete, onEdit }) {

    return (

        <div className="mt-12">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-3xl font-bold text-slate-800">

                    Recent Transactions

                </h2>

                <span className="text-slate-500">

                    {expenses.length} Transactions

                </span>

            </div>

            {
                expenses.length === 0 ? (

                    <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

                        <h3 className="text-2xl font-semibold text-slate-500">

                            No Expenses Yet

                        </h3>

                        <p className="text-slate-400 mt-2">

                            Add your first expense to get started.

                        </p>

                    </div>

                ) : (

                    <div className="space-y-5">

                        {
                            expenses.map((expense) => (

                                <ExpenseItem
                                    key={expense._id}
                                    expense={expense}
                                    onDelete={onDelete}
                                    onEdit={onEdit}
                                />

                            ))
                        }

                    </div>

                )
            }

        </div>

    );

}

export default ExpenseList;