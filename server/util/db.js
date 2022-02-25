import mongoose from 'mongoose';

export default function () {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('connected to the database'));
}
