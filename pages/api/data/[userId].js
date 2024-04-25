import User from "@/model/user";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    res.status(500).json({ message: "failed to connecting dataBase" });
  }
  if (req.method === "GET") {
    try {
      const { userId } = req.query;
      const userDetail = await User.findById(userId);
      res.status(200).json(userDetail);
    } catch (error) {
      res.status(500).json({ status: "Can Not Connect to DataBase" });
    }
  }
}
