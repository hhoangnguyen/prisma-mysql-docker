import express from "express";
import prisma from "./prisma.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/qrCode", async (req, res) => {
  try {
    const options = await prisma.qRCode.findMany();
    res.json(options);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000);
