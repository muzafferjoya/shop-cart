const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const app = express();

app.use(express.json());

//mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect('mongodb://mongodb:27017/products', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/products', productRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Product service running on port ${PORT}`);
});
