import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
const port = 3000;

const URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=twopart";

//Step 4 - Add a dynamic year to the footer.
//Hint: Google to find out how to get the current year using JS.

//api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=a4c876f5e3f0589ec714b4bab62d14a9

http: ecba8a2ba59a11835f756641f35975ef;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.get(URL);
    const { setup, delivery } = response.data;

    res.render("index.ejs", { setup, delivery });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
