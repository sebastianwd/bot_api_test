const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

Ubicacion = require("./models/Ubicacion");

// Connect to Mongoose
mongoose
  .connect(
    "mongodb://cosmosdb-bot.documents.azure.com:10255/cosmosdb_bot_api?ssl=true&replicaSet=globaldb",
    {
      auth: {
        user: "cosmosdb-bot",
        password:
          "HwNpyftH88tHzGDY17QuZB3okDoimsxQC4pFx3g7nef87QlszqYR9kN7l7VbpOVujsn2XlksMGVf3RPjnFhBGA=="
      }
    }
  )
  .then(() => console.log("MongoDB Connected to CosmosDB"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Please use /api/:tipo");
});

app.get("/api/:tipo", (req, res) => {
  var tipo = req.params.tipo;
  Ubicacion.findRandom({ tipo: tipo }, {}, { limit: 6 }, function(
    err,
    ubicaciones
  ) {
    if (err) {
      console.log(err);
      console.log("No logré obtener resultados 😐");
    }
    console.log("Enviando resultados");
    res.json(ubicaciones);
  });
});

app.listen(3000);
console.log("Running on port 3000...");
