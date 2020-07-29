import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import SubMenu from "./components/Menu/subMenu";
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
          <MenuItem disabled>111</MenuItem>
          <MenuItem>222</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>333</MenuItem>
            <MenuItem>444</MenuItem>
          </SubMenu>
        </Menu>
        <Menu
          onSelect={(index) => {
            console.log(index);
          }}
          mode="vertical"
          defaultOpenSubMenus={["2"]}
        >
          <MenuItem>111</MenuItem>
          <MenuItem>222</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>333</MenuItem>
            <MenuItem>444</MenuItem>
          </SubMenu>
          {/* <p>111</p> */}
        </Menu>
      </header>
    </div>
  );
}

export default App;
