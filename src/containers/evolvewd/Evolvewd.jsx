import React from "react";
import "./evolvewd.css";
import { Feature } from "../../components";

const Evolvewd = () => {
  return (
    <div className="ewd__evolvewd section__margin" id="evolvewd">
      <div className="ewd__evolvewd-features">
        <Feature
          title="evolveWD"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="ewd__evolvewd-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className="ewd__evolvewd-container">
        <Feature title="Chatbot" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  );
};

export default Evolvewd;
