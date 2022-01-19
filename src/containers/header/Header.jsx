import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="ewd__header section_padding" id="home">
      <div className="ewd__header-content">
        <h1 className="gradient__text">Let's Build Something Awesome Together</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order
          allow asked of.
        </p>
        <div className="ewd__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="ewd__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        {/* <div className="ewd__header-image">
          <img src={ai} alt="ai" />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
