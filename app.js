require('dotenv').config();
const express = require("express");
/* const { futimesSync } = require("fs"); */
const https = require("https");
const bodyParser = require("body-parser");
const { Console } = require("console");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname +"/index.html");
}
   );


app.post("/", function (req, res) {  
    const query = req.body.cityName;
    const apiKey = process.env.TATA;
    const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q="+ query + "&units=" + units + "&appid=" +apiKey;

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const podaci = JSON.parse(data);
      const temp = podaci.main.temp;
      const ikona = podaci.weather[0].icon
      console.log(temp);
      const opis = podaci.weather[0].description;
      console.log(opis);
      res.write("<h1 >Temperatura u " + query + " je " + temp + " </h1>");
      res.write("<h1>Opis je " + opis + " </h1>");
      const linkIkone = "http://openweathermap.org/img/wn/" + ikona + "@2x.png"
      console.log(linkIkone)
      process.env.TATA;
      console.log(process.env.TATA)
      res.write("<img src=" + linkIkone + ">")
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log(`Server started on port 3000`);
});


