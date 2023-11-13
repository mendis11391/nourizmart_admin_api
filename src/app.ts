import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import appRoutes from "./routes/appRoute";
import path from "path";
import adminRoutes from "./routes/adminRoutes";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();
const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/", appRoutes);
app.use("/users", userRoutes);
app.use("/admin", adminRoutes);
app.use("/products", productRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
