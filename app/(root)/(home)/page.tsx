"use client";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to create a custom React component?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    autor: {
      _id: "101",
      name: "John Doe",
      picture: "https://example.com/john.jpg",
    },
    upvotes: 12000,
    views: 100000,
    answers: [
      {
        _id: "201",
        content: "You can create a custom React component by..."
      }
    ],
    createdAt: new Date("2022-02-15T14:00:00Z"),
  },
  {
    _id: "2",
    title: "Redux Toolkit Not Updating State as Expected?",
    tags: [
      { _id: "3", name: "react" },
      { _id: "4", name: "redux" },
    ],
    autor: {
      _id: "102",
      name: "Sujata",
      picture: "https://example.com/sujata.jpg",
    },
    upvotes: 17,
    views: 1520000,
    answers: [
      {
        _id: "202",
        content: "This issue can be solved by..."
      }
    ],
    createdAt: new Date("2024-06-15T14:00:00Z"),
  },
];


const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link
          href="/ask-question"
          className="flex justify-end
      max-sm:w-full"
        >
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.autor}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
