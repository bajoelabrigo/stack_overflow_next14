"use server"
import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    if (!userId) throw new Error("User not found");

    return [
      { _id: 1, name: "tag1" },
      { _id: 2, name: "tag2" },
    ];
  } catch (error) {
    console.log(error);
    throw Error;
  }
}

export async function getAllTags(params: GetAllTagsParams){

    try{

        connectToDatabase();

        const tags = await Tag.find({})
    }catch(error){
        console.log(error);
        throw error;
    }
}