const Order = require('../models/orderModel');
const axios = require('axios');

const createOrder = async (req, res) => {
    try {
        const { userId, products, totalAmount } = req.body;

        // Verify user
        const userResponse = await axios.get(`http://user-service:3001/users/profile/${userId}`);
        if (!userResponse.data) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Verify products
        for (const item of products) {
            const productResponse = await axios.get(`http://product-service:3002/products/${item.productId}`);
            if (!productResponse.data) {
                return res.status(404).json({ error: `Product with ID ${item.productId} not found` });
            }
        }

        const newOrder = new Order({ userId, products, totalAmount });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { createOrder, getOrder, getAllOrders, updateOrderStatus };
