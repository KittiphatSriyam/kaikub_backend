const express = require("express");
const app = express();

const { ProvinceDB } = require("./connection/province-db");

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/saveProvince", (req, res) => {
  const fs = require("fs");
  let rawdata = fs.readFileSync("./province-master.json");
  let data = JSON.parse(rawdata);

  for (let i in data) {
    const city = {
      district: data[i].district,
      amphoe: data[i].amphoe,
      province: data[i].province,
      zipcode: data[i].zipcode,
      district_code: data[i].district_code,
      amphoe_code: data[i].amphoe_code,
      province_code: data[i].province_code,
    };

    let MasterCollection = new ProvinceDB.master(city);

    MasterCollection.save((err, result) => {
      if (err) {
        console.log("ERROR", err);
        res.sendStatus(500).json({ status: 500, msg: "error" });
      }
    });
  }
  res.sendStatus(200).json({ status: 200, msg: "success" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
