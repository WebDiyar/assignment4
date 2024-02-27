const express = require("express");
const router = express.Router();
const axios = require("axios");
const History = require("../model/historySchema");
const i18n = require("i18n");

router.get("/mockapi", async (req, res) => {
  const locale = req.query.lang || "en";
  i18n.setLocale(req, locale);
  let data;
  let error = null;

  try {
    const options = {
      method: "GET",
      url: "https://65dd86d3e7edadead7ee2447.mockapi.io/mockApi/mockApi",
    };

    const response = await axios.request(options);
    data = response.data;
    console.log(data);

    const historyEntry = new History({
      user_id: req.session.user.id, 
      request_type: "Mock API Data",
      request_data: JSON.stringify(data),
      outcome: "Success",
    });
    await historyEntry.save();
  } catch (err) {
    console.error(err);
    data = null;
    error = "Error fetching data, please try again";

    const historyEntry = new History({
      user_id: req.session.user.id, 
      request_type: "Mock API Data",
      request_data: null,
      outcome: "Error",
    });
    await historyEntry.save();
  }
  
  res.render("mockApi", { data, error });
});

module.exports = router;
