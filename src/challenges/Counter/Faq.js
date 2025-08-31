import React from "react";
import "./Component.css";

const Faq = (props) => {
  const { question, answer, index, openIndex, setOpenIndex } = props;


  const handleClick =()=>{
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div class="FaqMainDiv">
      <div class="FaqHeader">
        <div>
          <span> <button onClick={handleClick} class={openIndex === index ? "rotate" : ""}> > </button> </span> <span> {question} </span>
        </div>

        {openIndex === index && <div>{answer}</div>}
      </div>
    </div>
  );
};

export default Faq;
