import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import AppRoute from "./routes";
import bodyParser from "body-parser";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();
const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  exposedHeaders: "*",
};
app.use(bodyParser.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
const appRoute = new AppRoute();
appRoute.useRoute(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
