import Expense from "../models/Expense.js";

export const addExpense = async (req, res) => {

    try {

        const { title, amount, category, date } = req.body;

        if (!title || !amount || !category) {
            return res.status(400).json({
                message: "All required fields must be provided"
            });
        }

        const expense = await Expense.create({
            user: req.user.userId,
            title,
            amount,
            category,
            date
        });

        return res.status(201).json({
            message: "Expense Added Successfully",
            expense
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};
export const getExpenses = async (req, res) => {

    try {

        const expenses = await Expense.find({
            user: req.user.userId
        }).sort({ date: -1 });

        return res.status(200).json(expenses);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};
export const updateExpense = async (req, res) => {

    try {

        const expense = await Expense.findOne({
            _id: req.params.id,
            user: req.user.userId
        });

        if (!expense) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }

        expense.title = req.body.title || expense.title;
        expense.amount = req.body.amount || expense.amount;
        expense.category = req.body.category || expense.category;
        expense.date = req.body.date || expense.date;

        const updatedExpense = await expense.save();

        return res.status(200).json(updatedExpense);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};
export const deleteExpense = async (req, res) => {

    try {

        const expense = await Expense.findOne({
            _id: req.params.id,
            user: req.user.userId
        });

        if (!expense) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }

        await expense.deleteOne();

        return res.status(200).json({
            message: "Expense Deleted Successfully"
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};