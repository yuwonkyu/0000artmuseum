import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleClick = () => {
    setIsInputVisible(true);
    alert("너는 누구니?");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    alert(`반가워, ${name}아!`);
  };

  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={handleClick}>Click Me</button>

      {isInputVisible && (
        <div>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="이름을 입력하세요"
          />
          <button onClick={handleSubmit}>답하기</button>
        </div>
      )}
    </div>
  );
};

export default App;
