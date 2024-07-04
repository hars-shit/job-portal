
import connect from "@/lib/dbConnect";
import User from "@/lib/models/user";
import { NextApiRequest, NextApiResponse } from "next/types";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connect();
    const searchQuery = req.query.q as string;

    let users: User[];
    if (!searchQuery) {
      users = await User.find({});
    } else {
      users = await User.find({
        name: { $regex: new RegExp(searchQuery, "i") },
      });
    }

    res.status(200).json(users);
  } catch (err: any) {
    console.error("Error while searching", err);
    res.status(500).json({ error: "Internal server error" });
  }
};