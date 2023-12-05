import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import AppRoute from "./routes";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();
const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  exposedHeaders: "*",
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
const appRoute = new AppRoute();
appRoute.useRoute(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
