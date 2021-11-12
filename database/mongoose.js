const mongoose = require("mongoose");

const url = `mongodb://${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const rules = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(url, rules, function (err) {
  if (err) {
    console.log(
      "\n\tDatabase connection failed! Please start the mongodb server. \nError : ",
      err
    );
    console.log("--------------------------------------------------");
    process.exit(1);
  } else {
    console.log(
      "\n\t",
      mongoose.connection.readyState,
      "DB Connection Successfully"
    );
    console.log("--------------------------------------------------");
  }
});
