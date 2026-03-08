import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path, { dirname } from "path";


dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT: number = Number(process.env.PORT) || 5000;

const app: Application = express();

const corsOptions: CorsOptions = {
  origin: process.env.CLIENT_URL || "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use("/Uploads", express.static(path.join(__dirname, "Uploads")));
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});