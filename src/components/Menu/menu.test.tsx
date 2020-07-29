import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import Menu from "./menu";
import MenuItem from "./menuItem";

const testProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: "test",
};

const verticalProps = {
  defaultIndex: 0,
  mode: "vertical",
  onClick: jest.fn(),
};

const generateMenu = (props) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>active</MenuItem>
      <MenuItem index={1}>22</MenuItem>
      <MenuItem index={2} disabled>
        disabled
      </MenuItem>
    </Menu>
  );
};
let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("测试Menu 和 MenuItem 组件", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId("test-menu") as HTMLUListElement;
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("渲染一个default Menu MenuItem", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("xr-menu test");
    expect(menuElement.getElementsByTagName("li").length).toBe(3);
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });
  it("点击items应该更改active并且调用callback", () => {});
  it("传入mode=’vertical‘, 渲染竖排menu", () => {});
  // it("渲染 Disabled Button", () => {});
});
