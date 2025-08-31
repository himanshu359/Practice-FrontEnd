import "./App.css";
import Faq from "./challenges/Counter/Faq";
import React from "react";


const json = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

const Component = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <div class="component-blocks">
       {json.map((obj, index) => {
        return <Faq question={obj.question} answer={obj.answer} index={index} openIndex={openIndex} setOpenIndex={setOpenIndex}/>;
      })}
    </div>
  );
};
export default Component;
