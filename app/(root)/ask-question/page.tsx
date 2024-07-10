"use client";

import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import Question from "@/components/forms/Question";

const askQuestion = () => {
  return (
    <div>
      <div>
        <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      </div>
      <div className="mt-9">
        <Question />
      </div>
    </div>
  );
};

export default askQuestion;
