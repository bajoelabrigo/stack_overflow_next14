"use server";

import User from "@/database/user.model";

import { connectToDatabase } from "../mongoose";

export async function createUser(user: any) {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
