import mongoose from "mongoose";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.body;
    if (!name || name.length <= 3) {
      res.status(422).json({ data: "invald data" });
      return;
    }
    mongoose.connect(
      "mongodb+srv://mahdi_lhj:Mahdikhalili1998@mahditest.qfstcje.mongodb.net/?retryWrites=true&w=majority&appName=mahdiTest",
      () => {
        console.log("connected to DB bah bah ");
      },
    );
    res.status(201).json(name);
  }
}
