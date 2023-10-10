import React from "react";
import questions from "./Components/Data";

import "./Components/Styles.css";
import Main from "./Components/Main";
function App() {
  return (
    <div className="conatiner">
      <section className="left_compartment">
        <p>questions and answers about login</p>
      </section>

      <section className="right_compartment">
        {questions.map((items) => (
          <Main key={items.id} {...items} />
        ))}
      </section>
    </div>
  );
}

export default App;
