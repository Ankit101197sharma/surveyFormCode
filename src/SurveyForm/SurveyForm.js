import React, { useState } from "react";
import classes from "./SurveyForm.module.css";

function SurveyForm() {
  const [Name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [Age, setAge] = useState("");
  const [Role, setRole] = useState("");
  const [Text, setText] = useState("");
  const [Suggestion, setSuggestion] = useState("");
  const [Message, setMessage] = useState("");
  const submit = (e) => {
    e.preventDefault();
      const newEntry = { 
        name:Name,
        email:mail,
        Age:Age,
        Role:Role,
        Text:Text,
        Suggestion:Suggestion,
        Message:Message,
      };
      setName("");
      setEmail("");
      setAge("");
      setRole("");
      setSuggestion("");
      setText("");
      setMessage("");
      console.log(newEntry)
  };
  return (
    <div className={classes.contactstyle}>
      <h3 style={{color:'white'}}>Survey Form</h3>
      <div className={classes.mainWrapper}>
        <form id="myForm" onSubmit={submit}>
          <label> Name</label>
          <br />
          <input
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label> Email</label>
          <br />
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label> Age (optional) </label>
          <br />
          <input
            type="number"
            name="number"
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <br />
          <label> Which opetion best describes your current role?</label>
          <br />
          <input
            type="text"
            name="role"
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <br />
          <label> Would you recommend this application to a friend ?</label>
          <br />
          <input
            type="radio"
            name=" "
            onChange={(e) => setSuggestion(e.target.value)}
          />
          Definitely
          <br />
          <input
            type="radio"
            name=" "
            onChange={(e) => setSuggestion(e.target.value)}
          />
          May be
          <br />
          <input
            type="radio"
            name=" "
            onChange={(e) => setSuggestion(e.target.value)}
          />
          Note Sure
          <br />
          <label> Which is your favorite feature of the application ?</label>
          <br />
          <input
            type="text"
            name=" "
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <label>Any comment or suggestion ?</label> <br />
          <textarea
            name=" "
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>{" "}
          <br />
          <input type="Submit" value="send" />
        </form>
      </div>
    </div>
  );
}

export default SurveyForm;
