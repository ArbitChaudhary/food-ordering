import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/db";
import userRouter from "./routes/user.route";
import usersRouter from "./routes/users.routes";

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/users", usersRouter);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});