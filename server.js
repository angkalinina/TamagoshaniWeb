import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 5173;

// Отдаём все файлы из /dist
app.use(express.static(path.join(__dirname, "dist")));

// Для SPA: возвращаем index.html на все маршруты
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`✅ Server is running: http://localhost:${port}`);
});
