import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

import contactRoutes from "./routes/contactRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

console.log('🌍 ENV EMAIL_USER:', process.env.EMAIL_USER);

app.get('/', (req, res) => {
  res.send('Backend is running ✅');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
