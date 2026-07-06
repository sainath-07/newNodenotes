import express from "express";
import path from "path";
import multer from "multer";
import fs from "fs";

const app = express();

// step-1: Store configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueFileName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueFileName);
  },
});

// step-2: upload middleware
const upload = multer({ storage });

// step-3: creating upload folder if not exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// step-4: Create Routes
app.get("/", (req, res) => {
  res.send(`
        <h1>File upload server</h1>
        <form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="myfile" />
            <button type="submit">Upload file</button>
        </form>
        `);
});

//
app.post("/upload", upload.single("myfile"), (req, res) => {
  res.send(`File uploaded successfully: ${req?.file?.filename}`);
});

app.listen(3000, () => {
  console.log("Server is running on port:3000");
});
