import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGOOSE_URI_MAIN);
  console.log("be DB vasle shodam");
}

export default connectDB;
