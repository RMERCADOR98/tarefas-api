import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./Routes/router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

app.use("/api/v1", router);

// app.listen(port, () => {
//   console.log(`Up on localhost: ${port}`);
// });

export default app;
