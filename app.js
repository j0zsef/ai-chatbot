import OpenAI from "openai";
import "dotenv/config";
import { createRequire } from "module";

const port = 8080 || process.env.PORT;
const require = createRequire(import.meta.url);
require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const openaiAPI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/chat', async (req, res) => {
    const messages = req.body.messages;
    const model = req.body.model;
    const temp = req.body.temp;

    const completion = await openaiAPI.chat.completions.create({
        model: model,
        messages: messages,
        temperature: temp,
    });
    res.status(200).json({ result: completion.choices });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
