import express from "express";
import path from "path";
import { fileURLToPath } from "url";
 
// Determine the directory name (__dirname equivalent)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // This should be __dirname, not _dirname
 
const app = express();
 
app.use(express.static(path.join(__dirname, "dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
 
const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});