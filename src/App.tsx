import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import "./styles/index.scss";

function App() {
  const a = "123";
  if (a === "123") {
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button
          autoFocus
          onClick={() => {
            console.log(111);
          }}
        >
          hello
        </Button>
        <Button btnType={ButtonType.Danger} className="custom">
          hello
        </Button>
        <Button disabled>hello world</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          hello
        </Button>
        <Button
          btnType={ButtonType.Link}
          target="_blank"
          href="https://www.baidu.com"
        >
          baidu
        </Button>
      </header>
    </div>
  );
}

export default App;
