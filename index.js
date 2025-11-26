const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoutes');
const errorHandler = require('./src/middlewares/errorHandler')
const cors = require('cors'); 

// Middleware CORS






const app = express();
const PORT = 3030;

// mongoose.connect('mongodb://localhost:27017/mydataBase', {
//     useNewUrlParser: true
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.error('Error connecting to MongoDB:', err);
// });
app.use(cors({
    origin: 'https://simple-front-end-ochre.vercel.app'
}));
app.use(express.json());
app.use('/users', userRoutes);
// Usar outras rotas aqui
app.use(errorHandler); // Adicione o errorHandler aqui
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
