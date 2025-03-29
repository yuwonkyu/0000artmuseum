// App.js
import React from "react";
import "./App.css";
import HeadComponent from "./components/HeadComponent";

const App = () => {
  return (
    <div className="App">
      {/* HeadComponent를 App 컴포넌트 안에서 사용 */}
      <HeadComponent />

      <header>
        <a href="/">
          <img src="/img/Rogo.svg" alt="로고" />
        </a>
      </header>

      <main>
        <h1>Welcome to the 0000 Art Museum</h1>
        <p>Explore the AI-powered art gallery.</p>
      </main>
    </div>
  );
};

export default App;
