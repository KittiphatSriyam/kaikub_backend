const mongoose = require("mongoose");
const { url, username, password } = require("./config");
const { ProvinceSchema } = require("../schema/province-schema");
const Schema = mongoose.Schema;

class ProvinceDB {
  static master;
  constructor() {
    (async () => {
      const con = await mongoose.createConnection(`${url}/Province`, {
        auth: {
          username,
          password,
        },
        authSource: "admin",
      });
      this.setMasterCollection(con);
    })();
  }
  setMasterCollection(con) {
    if (this.master == null) {
      this.master = con.model("master", ProvinceSchema);
    }
  }
}

module.exports = {
  ProvinceDB: new ProvinceDB(),
};
