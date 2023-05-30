import app from "../src/app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
