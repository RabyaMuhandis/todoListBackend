// require('dotenv').config();
// const express = require('express');
// const tasksRoutes = require('./routes/tasksRoutes');
// const connectDB = require('./config/dbConfig');
// const authRoutes = require("./routes/authRoutes")
// const app = express();
// const port = 3000;
// app.use(express.json());
// app.use('api/auth', authRoutes);
// app.use('/tasks', tasksRoutes );

// connectDB()

// app.listen(port,()=> {
//     console.log(`sever running on port ${port}`);
// })


require('dotenv').config();
const express = require('express');
const tasksRoutes = require('./routes/tasksRoutes');
const connectDB = require('./config/dbConfig');
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = 3000;

// middleware
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);   // ✅ fixed
app.use('/tasks', tasksRoutes);

// connect to DB
connectDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
