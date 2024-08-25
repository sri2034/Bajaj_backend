const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/bfhl', dataRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the MERN backend API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
