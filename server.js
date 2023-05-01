import express from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import axios from 'axios';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  organization: process.env.ORG_KEY,
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);


app.post("/api/chat", async (req, res) => {
  const input = req.body.message;

  try {
    const apiResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    });

    const message = apiResponse.data.choices[0].message.content;
    res.json({ message });
  } catch (error) {
    res.status(500).json({ error: "Failed to get response from API" });
  }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



