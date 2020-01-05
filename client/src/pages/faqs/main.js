import React, { useState } from "react";
import Header from "./Header";
import FAQ from "./FAQ";
import "./index.css";
import { MDBContainer, MDBJumbotron } from "mdbreact";
import { Link } from "react-router-dom";
import Search from "./searchbar/search";

const App = () => {
  const [faqs, setfaqs] = useState([
    {
      question: "How many programmers does it take to make a website?",
      answer: "Dont't Know.",
      open: false
    },
    {
      question: "Who is most awesome person?",
      answer: "You. ",
      open: false
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false
    },
    {
      question: "How many programmers does it take to make a website?",
      answer: "Dont't Know.",
      open: false
    },
    {
      question: "Who is most awesome person?",
      answer: "You. ",
      open: false
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false
    },
    {
      question: "How many programmers does it take to make a website?",
      answer: "Dont't Know.",
      open: false
    },
    {
      question: "Who is most awesome person?",
      answer: "You. ",
      open: false
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false
    },

    {
      question: "How many programmers does it take to make a website?",
      answer: "Dont't Know.",
      open: false
    },
    {
      question: "Who is most awesome person?",
      answer: "You. ",
      open: false
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false
    },
    {
      question: "How many programmers does it take to make a website?",
      answer: "Dont't Know.",
      open: false
    },
    {
      question: "Who is most awesome person?",
      answer: "You. ",
      open: false
    },
    {
      question: "How many programmers does it take to make a website?",
      answer: "Dont't Know.",
      open: false
    },
    {
      question: "Who is most awesome person?",
      answer: "You. ",
      open: false
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false
    },
    {
      question: "How many programmers does it take to make a website?",
      answer: "Dont't Know.",
      open: false
    },
    {
      question: "Who is most awesome person?",
      answer: "You. ",
      open: false
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false
    },
    {
      question: "How many programmers does it take to make a website?",
      answer: "Dont't Know.",
      open: false
    },
    {
      question: "Who is most awesome person?",
      answer: "You. ",
      open: false
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false
    },

    {
      question: "How many programmers does it take to make a website?",
      answer: "Dont't Know.",
      open: false
    },
    {
      question: "Who is most awesome person?",
      answer: "You. ",
      open: false
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false
    },
    {
      question: "How many programmers does it take to make a website?",
      answer: "Dont't Know.",
      open: false
    },
    {
      question: "Who is most awesome person?",
      answer: "You. ",
      open: false
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false
    }
  ]);
  const [showfaqs] = useState(faqs);

  const toggleFAQ = index => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  const handleChange = e => {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = showfaqs;

      // Use .filter() to determine which items should be displayed
      // based on the search terms

      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.question.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = showfaqs;
    }
    // Set the filtered state based on what our rules added to newList

    setfaqs(newList);
  };
  return (
    <div>
      <div className="bcgrnd">
        <div className="App" style={{ display: "inline" }}>
          <Header />
          <Search handleChange={handleChange} />
          <div className="scroll">
            <div className="faqs">
              {faqs.map((faq, i) => (
                <FAQ faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
              ))}
            </div>
          </div>
        </div>
        <MDBJumbotron className="bg-light mt-5 mb-0">
          <MDBContainer className=" bg-light">
            <h2 className="display-4 text-center">Doesn't Find Your Doubt</h2>
            <h6 className="text-center">
              No Worries just send your doubt
              <Link className="text-white" to="/query">
                {" "}
                <div className="buttons">
                  {" "}
                  <button className="btn-hover color-7">HERE</button>
                </div>
              </Link>
            </h6>
            <h6 className="text-center">
              <i className="fas fa-laugh-beam" /> We wiil soon contact You
            </h6>
          </MDBContainer>
        </MDBJumbotron>
        {/* <Link to="/query">Submit Yor Question here</Link> */}
      </div>
    </div>
  );
};

export default App;
