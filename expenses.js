const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Expense = require('../models/Expense');

const router = express.Router();

// Add Expense
router.post(
    '/',
    [
        auth,
        [
            check('category', 'Category is required').not().isEmpty(),
            check('amount', 'Amount is required').isNumeric(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { category, amount, comments } = req.body;

        try {
            const newExpense = new Expense({
                user: req.user.id,
                category,
                amount,
                comments,
            });

            const expense = await newExpense.save();
            res.json(expense);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

// Get All Expenses
router.get('/', auth, async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.id }).sort({
            createdAt: -1,
        });
        res.json(expenses);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Edit Expense
router.put('/:id', auth, async (req, res) => {
    const { category, amount, comments } = req.body;

    const updatedFields = {};
    if (category) updatedFields.category = category;
    if (amount) updatedFields.amount = amount;
    if (comments) updatedFields.comments = comments;

    try {
        let expense = await Expense.findById(req.params.id);
        if (!expense) {
            return res.status(404).json({ msg: 'Expense not found' });
        }

        if (expense.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        expense = await Expense.findByIdAndUpdate(
            req.params.id,
            { $set: updatedFields, updatedAt: Date.now() },
            { new: true }
        );

        res.json(expense);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Delete Expense
router.delete('/:id', auth, async (req, res) => {
    try {
        let expense = await Expense.findById(req.params.id);
        if (!expense) {
            return res.status(404).json({ msg: 'Expense not found' });
        }

        if (expense.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Expense.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Expense removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server
