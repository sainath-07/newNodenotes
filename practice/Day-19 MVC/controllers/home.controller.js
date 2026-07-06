import { homeData } from "../models/homeData.js";

export const homeControllerLogic = (req, res) => {
  const data = homeData();
  res.render("home", data);
};
