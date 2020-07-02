import * as express from "express";
import apiRouter from "./routes";
import * as path from "path";

let app = express();

app.use(express.json());
app.use("/api", apiRouter);
app.use(express.static("public"));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

app.listen(3000);
