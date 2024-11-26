import app from './app.js'
import connectToDb from './utils/db.js'
import {errorMiddleware} from './error/error.js'


// Middleware
//app.use(cors()); // Enable Cross-Origin Resource Sharing


// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Define port and start server
const PORT = process.env.PORT || 5000;
app.use(errorMiddleware)

connectToDb().then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port ${PORT}`);
    });
  });