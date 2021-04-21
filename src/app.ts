import express, { Request, Response } from "express";
import layout from "./backend/layout";
import Bundler from "parcel-bundler";

const bundler = new Bundler("./src/frontend/entry.tsx");

const app = express();
const port = 3000;

app.use(bundler.middleware());

app.get("/", async (req: Request, res: Response) => {
  const html = await layout();
  res.send(html);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
