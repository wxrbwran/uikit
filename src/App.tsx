import React, { useState } from "react";
import Button from "./components/Button/button";
import Transition from "./components/Transition/transition";
import Menu from "./components/Menu/menu";
import SubMenu from "./components/Menu/subMenu";
import MenuItem from "./components/Menu/menuItem";
import Icon from "./components/Icon/icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./styles/index.scss";

library.add(fas);
function App() {
  const [show, setShow] = useState(false);
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

        <Button
          btnType={ButtonType.Link}
          target="_blank"
          href="https://www.baidu.com"
        >
          baidu
        </Button> */}
        <Button
          btnType="primary"
          size="lg"
          onClick={() => {
            setShow(!show);
          }}
        >
          toggle
        </Button>
        <Transition in={show} timeout={300} animation="zoom-in-left">
          <div>
            <div>show!</div>
            <div>show!</div>
            <div>show!</div>
            <div>show!</div>
            <div>show!</div>
            <div>show!</div>
            <div>show!</div>
          </div>
        </Transition>
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
        <FontAwesomeIcon icon="arrow-down" size="1x" />
        <Icon icon="coffee" theme="danger"></Icon>
      </header>
    </div>
  );
}

export default App;
