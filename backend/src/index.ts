import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/db";
import userRouter from "./routes/user.route";
import usersRouter from "./routes/users.routes";
import vendorRouter from "./routes/vendors.route";
import categoryRouter from "./routes/category.route";
import foodRouter from "./routes/food.route";

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/vendors", vendorRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/food", foodRouter);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
