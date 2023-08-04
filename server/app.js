import express  from "express";
import router from "./src/routes/auth.routes.js";

const app = express();
app.use(express.json());
app.use("/api", router);


app.get('/', (req, res) => {
    res.send('<h1>Hello word</h1>')
});

export default app

