const express = require("express");
const router = express.Router();
const History = require("../model/historySchema");
const i18n = require("i18n");
const axios = require("axios");

router.get("/scrapperApi", async (req, res) => {
  const locale = req.query.lang || "en";
  i18n.setLocale(req, locale);

  try {
    const products = await fetchProducts();

    res.render("scrapperApi", { products, error: null });
  } catch (err) {
    console.error(err);
    const historyEntry = new History({
      user_id: req.session.user.id,
      request_type: "sneakers",
      outcome: "Error",
    });
    historyEntry.save();
    res.render("scrapperApi", {
      error: "Error fetching sneaker data",
    });
  }
});

router.post("/scrapperApi", async (req, res) => {
  const url = req.body.scrapper;

  const options = {
    method: "GET",
    url: "https://site-scrapper.p.rapidapi.com/fetchsitetitle",
    params: {
      url: `${url}`,
    },
    headers: {
      'X-RapidAPI-Key': '1a3fe39d3bmshcd185cef48fc190p1b4fc0jsnd2e79ed21079',
      'X-RapidAPI-Host': 'site-scrapper.p.rapidapi.com'
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response);
    const mockApiEndpoint = "https://65dd86d3e7edadead7ee2447.mockapi.io/mockApi/mockApi";
    const dataToSend = {
      title: "Title of scrap info",
      url: `${url}`,
      responseData: response.data,
    };

    console.log(dataToSend);

    await axios.post(mockApiEndpoint, dataToSend);
    res.send("Title of this website: " + response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching site title");
  }
});

module.exports = router;
