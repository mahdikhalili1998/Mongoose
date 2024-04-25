
import User from "../../../model/user";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    res.status(500).json({ message: "failed to connecting dataBase" });
  }
  if (req.method === "POST") {
    const {
      users: {
        name,
        lastName,
        age,
        email,
        address: { city, street, alley },
        phone,
      },
    } = req.body;
    if ((!name && !lastName) || name.length <= 3) {
      res.status(422).json({ data: "invald data" });
      return;
    }
    // const user = new User({ name });
    // await user.save();
    try {
      const user = await User.create({
        name,
        lastName,
        age,
        email,
        phone,
        address: [{ city }, { street }, { alley }],
        
      });

      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "failed to connecting dataBase" });
    }
  } else if (req.method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "error dari haji" });
    }
  }
}
