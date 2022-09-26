import mongoose from "mongoose";
import { app } from "./app";

mongoose.connect('mongodb://127.0.0.1:27017/fullstackChallenge?directConnection=true&serverSelectionTimeoutMS=2000');

app.listen(3333, () => {
    console.log('Server running on port 3333.')
})

