const express = require('express');
const { createOrder, getOrder, getAllOrders, updateOrderStatus } = require('../controllers/orderController');
const router = express.Router();

router.post('/', createOrder);
router.get('/:id', getOrder);
router.get('/', getAllOrders);
router.put('/:id/status', updateOrderStatus);

module.exports = router;
