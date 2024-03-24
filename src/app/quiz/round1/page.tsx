"use client";
import Question from "@/components/quiz/Question";
import QuestionNumberButton from "@/components/quiz/QuestionNumberButton";
import { useState } from "react";

const Page = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [ansArr, setAnsArr] = useState<string[]>(Array(10).fill(""));
  const arr = new Array(10).fill(0);
  const questionsArray = arr.map((_, idx) => (
    <QuestionNumberButton
      key={idx}
      qNo={idx + 1}
      questionNumber={questionNumber}
      setQuestionNumber={setQuestionNumber}
    />
  ));
  return (
    <main className="min-h-screen text-white mx-10 sm:mx-20 flex flex-col justify-center py-10 pt-32">
      <Question
        questionNumber={questionNumber}
        ansArr={ansArr}
        setAnsArr={setAnsArr}
        setQuestionNumber={setQuestionNumber}
      />
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 text-center gap-4">
        {questionsArray}
      </div>
    </main>
  );
};

export default Page;
