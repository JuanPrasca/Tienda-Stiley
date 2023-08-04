import app from "./app.js";
import { connectDb } from "./src/config/db.config.js";

const PORT = 2000;

connectDb();
app.listen(PORT, ()=> {
    console.log(`Servidor en: http://localhost:${PORT}/`);
})
