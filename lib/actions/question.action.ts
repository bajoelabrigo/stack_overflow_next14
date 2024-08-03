"use server";

//Here I work Server actions

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import Tag from "@/database/tag.model";
import {
  CreateQuestionParams,
  GetQuestionByIdParams,
  GetQuestionsParams,
} from "./shared.types";
import User from "@/database/user.model";

export async function getQuestions(params: GetQuestionsParams) {
  try {
    //connect to DB
    connectToDatabase();
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User });

    return { questions };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    //connect to DB
    connectToDatabase();

    const { title, content, tags, author, path } = params;

    //create the question
    const question = await Question.create({ title, content, author });

    const tagDocuments = [];

    //Create the tags or get then if they already exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } }, //filter tags
        { $setOnInsert: { name: tag }, $push: { question: question._id } }, //action with tags filtered
        { upsert: true, new: true } //update new tags
      );
      tagDocuments.push(existingTag._id);
    }
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    //create an interaction record for the user's ask_question action

    // Increment author's
  } catch (error) {}
}

export async function getQuestionById(params: GetQuestionByIdParams) {
  try {
    connectToDatabase();

    const { questionId } = params;

    const question = await Question.findById(questionId)
      .populate({ path: 'tags', model: Tag, select: '_id name'})
      .populate({ path: 'author', model: User, select: '_id clerkId name picture'})

      return question;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
