import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();
  const promises = matchRoutes(Routes, req.path).map((r) => {
    return r.route.loadData ? r.route.loadData(store, req._parsedUrl) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(port, () => {
  console.log("Listening on port 3000");
});
