import dotenv  from "dotenv";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Inciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`, );
})