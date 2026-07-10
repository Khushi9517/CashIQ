import mongoose from "mongoose";
import Expense from "../models/Expense.js";

export const getDashboard = async (req, res) => {

    try {

        const userId = new mongoose.Types.ObjectId(req.user.userId);

        const expenses = await Expense.find({
            user: userId
        }).sort({ date: -1 });

        const totalExpenses = expenses.reduce(
            (sum, expense) => sum + expense.amount,
            0
        );

        const totalTransactions = expenses.length;

        const recentTransactions = expenses.slice(0, 5);

        const categorySummary = await Expense.aggregate([
            {
                $match: {
                    user: userId
                }
            },
            {
                $group: {
                    _id: "$category",
                    total: {
                        $sum: "$amount"
                    }
                }
            }
        ]);
        const formattedCategorySummary = categorySummary.map((item) => ({
    category: item._id,
    total: item.total,
}));
        const monthlySummary = await Expense.aggregate([
    {
        $match: {
            user: userId
        }
    },
    {
        $group: {
            _id: {
                year: { $year: "$date" },
                month: { $month: "$date" }
            },
            total: {
                $sum: "$amount"
            }
        }
    },
    {
        $sort: {
            "_id.year": 1,
            "_id.month": 1
        }
    }
]);
const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const formattedMonthlySummary = monthlySummary.map((item) => ({
    month: monthNames[item._id.month - 1],
    total: item.total,
}));

    return res.status(200).json({
    totalExpenses,
    totalTransactions,
    recentTransactions,
    categorySummary: formattedCategorySummary,
    monthlySummary: formattedMonthlySummary,
});

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};