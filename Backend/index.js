const express = require('express');
const morgan = require('morgan');
const productRouter = require('./routes/productRoutes');
const authRouter = require('./routes/authRoutes');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./DB/connect');
dotenv.config();
const rateLimit = require('express-rate-limit');
const app = express();
app.use(
  cors({
    origin: 'https://eagle-store.netlify.app',
  })
);

app.use(morgan('dev'));
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);
app.use(express.json());

// Routes

app.use('/api/v1/products', productRouter);
app.use('/api/v1', authRouter);

const port = process.env.PORT || 8800;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
