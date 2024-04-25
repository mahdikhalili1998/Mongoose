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
  } else if (req.method === "PATCH") {
    const { editDetail } = req.body;
    // console.log(editDetail);
    const { userId } = req.query;
    try {
      const editUser = await User.findById(userId);
      editUser.age = editDetail.age;
      editUser.phone = editDetail.phone;
      editUser.email = editDetail.email;
      await editUser.save();
    //   console.log(editUser);
      res.status(200).json(editUser);
    } catch (error) {
      res.status(500).json({ status: "Can Not Edit User Info" });
    }
  }
}
