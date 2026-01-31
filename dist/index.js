import express from "express";
import path from "node:path";
const app = express();
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile(path.join(path.dirname(import.meta.dirname), "index.html"));
});
app.listen(3000, () => console.log("http://localhost:3000"));
