import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button
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
        </Button> */}
        <Menu
          onSelect={(index) => {
            console.log(index);
          }}
        >
          <MenuItem index={0} disabled>
            111
          </MenuItem>
          <MenuItem index={1}>222</MenuItem>
        </Menu>
        <Menu
          onSelect={(index) => {
            console.log(index);
          }}
          mode="vertical"
        >
          <MenuItem index={0}>111</MenuItem>
          <MenuItem index={1}>222</MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
