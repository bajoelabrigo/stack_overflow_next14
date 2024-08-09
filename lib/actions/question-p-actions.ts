import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import { GetQuestionByIdParams } from "./shared.types";
import Tag from "@/database/tag.model";
import User from "@/database/user.model";

export async function getQuestionById(params: GetQuestionByIdParams){

    try{
        connectToDatabase();

        const {questionId} = params;

        const question = await Question.findById(questionId)
        .populate({path: 'tags', model: Tag, select: ':id name'})
        .populate({path: 'author', model: User, select: '_id clerkId name picture'})

        return question
    }catch(error){
        console.error(error);
        throw new Error('Failed to fetch question');
    }
}