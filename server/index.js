import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from the backend!" });
})
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running 
    at http://localhost:${PORT}`));
    