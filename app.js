import "dotenv/config.js";
import express from "express";
import cors from "cors";
import connectDB from "./src/config/database.js";
import pedidoRoutes from "./src/interfaces/routes/pedidoRoutes.js";
import usuarioRoutes from './src/interfaces/routes/usuarioRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/usuarios", usuarioRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
});
