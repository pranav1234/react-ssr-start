import express from "express";
import renderer from "./helpers/renderer";

const app = express();
var port = process.env.PORT || 8080;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send(renderer());
});

app.listen(port, () => {
  console.log("Listening on prot 3000");
});
