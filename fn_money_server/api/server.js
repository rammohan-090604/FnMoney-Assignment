const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
const db = require('./dbConfig');

const app = express();

const JWT_SECRET = 'your_jwt_secret_key'; // Use a secure secret key in production

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/login', async (req, res) => {
    //get the details from db
    try {
        const users = await db('user_data');
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: `${error}` });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await db('user_data').where({ email, password }).first();
        if (user) {
            // Generate a JWT token
            const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: `${error}` });
    }
});

app.post('/register', async (req, res) => {
    //insert to db
    const { email, password, name, phone } = req.body;
    if (!email || !password || !name || !phone) {
        res.status(400).json({ message: 'Please provide data' });
    }
    try {
        await db('user_data').insert({ email, password, name, phone });
        res.json({ message: 'User created' });
    }
    catch (error) {
        res.status(500).json({ message: `${error}` });
    }
});

// // Middleware to verify JWT token
// const verifyToken = (req, res, next) => {
//     const token = req.headers['authorization'];
//     if (!token) {
//         return res.status(401).json({ message: 'No token provided' });
//     }
//     jwt.verify(token, JWT_SECRET, (err, decoded) => {
//         if (err) {
//             return res.status(401).json({ message: 'Failed to authenticate token' });
//         }
//         req.userEmail = decoded.email;
//         next();
//     });
// };


module.exports = app;
