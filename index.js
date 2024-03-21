import connetcDatabase from "./src/database/db.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = 3000;
const app = express();

connetcDatabase();

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
