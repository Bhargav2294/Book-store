import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Middleware for parsing JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MongoDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("MongoDB connection error: ", error); // Improved error logging
});

// Import routes
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";

// Use routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
