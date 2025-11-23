import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.amanabootcamp.org/api/fs-classwork-data/amana-transportation"
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Proxy Error", details: err.message });
  }
});

app.listen(3000, () => {
  console.log("Proxy server running on http://localhost:3000");
});
