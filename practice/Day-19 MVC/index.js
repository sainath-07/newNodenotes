import express from "express";
import { VIEW_ENIGNE, PORT } from "./configuration/config.js";
import homeRoutes from "./routes/home.route.js";

const app = express();

// template engine configuration
app.set("view engine", VIEW_ENIGNE);
app.use("/home", homeRoutes);

// Server running
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT:3000`);
});
