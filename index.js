const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
app.use(express.json());
//Conexion a la base de datos

app.use(cors());

app.use("/", (req, res) => {
  res.status(201).json({ msg: "No Country" });
});
const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 5000;

app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
