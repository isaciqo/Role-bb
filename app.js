const express = require('express');
const mongoose = require('mongoose');
const routerRegister = require('./src/intergaces/html/presentation/RouterRegister.js');
const errorHandler = require('./src/intergaces/html/middlewares/errorHandler')
const cors = require('cors');
const { scopePerRequest } = require('awilix-express');
const container = require('./src/intergaces/html/container.js');
const swaggerDocs = require('./src/swagger/index.js');
const app = express();
const PORT = 3030;

mongoose.connect('mongodb+srv://isaciqo42_db_user:w7cs5W275vrCU2jn@simplesoftware.45dz97k.mongodb.net/?retryWrites=true&w=majority&appName=simpleSoftware', {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});
app.use(express.json());
app.use(scopePerRequest(container));
app.use(cors({
    origin: 'https://carbon-footprint-hub-zeta.vercel.app'
}));
swaggerDocs(app);
routerRegister(app, container);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
