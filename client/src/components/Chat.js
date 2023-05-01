import { useState } from "react";
import axios from "axios";

export const Chat = ({ setAnswer }) => {
  const [input, setInput] = useState("");

  const getAnswer = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/chat", { message: input });
      // Update setAnswer to store the response as an array element
      setAnswer((prevAnswers) => [...prevAnswers, response.data.message]);
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    if (input !== "") {
      getAnswer();
    }
  };

  return (
    <div id="searchField">
      <h1>
        <input
          id="searchInput"
          type="text"
          placeholder="Ask a question"
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </h1>
      <br />
    </div>
  );
};