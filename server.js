import express from "express";
import router from "./routes";
import morgan from "morgan";
//import config from "./config";

const app = express();

//Use app.use() to handle all requests matching "/api" with router
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", router);

app.use((err, req, resp, next) => {
  console.log(error);
  res
}
)

/**
 * Bind the app to a specified port
 * You can access your app at http://localhost:<port>
 */
app.listen(5001, () =>
  console.log(`Server listening on port 5001...`)
);