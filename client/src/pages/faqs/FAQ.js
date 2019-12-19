import React from "react";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question ">{faq.question}</div>
      <div className="faq-answer " style={{ color: "red" }}>
        {faq.answer}
      </div>
    </div>
  );
}

export default FAQ;
