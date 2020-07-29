import React from "react";
import {
  render,
  fireEvent,
  RenderResult,
  cleanup,
  wait,
} from "@testing-library/react";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const testProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: "test",
};

const verticalProps = {
  defaultIndex: "0",
  mode: "vertical",
  onClick: jest.fn(),
};

const generateMenu = (props) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem>22</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <SubMenu title="sub">
        <MenuItem>s1</MenuItem>
        <MenuItem>s2</MenuItem>
      </SubMenu>
    </Menu>
  );
};
const createStyleFile = () => {
  const cssFile: string = `
    .xr-submenu {
      display:none;
    }
    .xr-submenu.menu-opened{
      display:block;
    }
  `;
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = cssFile;
  return style;
};
let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("测试Menu 和 MenuItem 组件", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    wrapper.container.append(createStyleFile());
    menuElement = wrapper.getByTestId("test-menu") as HTMLUListElement;
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("渲染一个default Menu MenuItem", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("xr-menu test");
    expect(menuElement.querySelectorAll(":scope > li").length).toBe(4);
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });
  it("点击items应该更改active并且调用callback", () => {
    const thirdItem = wrapper.getByText("22");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("1");

    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith("2");
  });
  it("在SubMenu上hover时，显示dropdown menu", async () => {
    expect(wrapper.queryByText("s1")).not.toBeVisible();
    const dropdownElement = wrapper.getByText("sub");
    fireEvent.mouseEnter(dropdownElement);
    await wait(() => {
      expect(wrapper.queryByText("s1")).toBeVisible();
    });
    fireEvent.click(wrapper.getByText("s1"));
    expect(testProps.onSelect).toHaveBeenCalledWith("3-0");
    // expect(wrapper.queryByText("s1")).not.toBeVisible();
    await wait(() => {
      expect(wrapper.queryByText("s1")).not.toBeVisible();
    });
  });

  it("传入mode=’vertical‘, 渲染竖排menu", () => {
    cleanup();
    wrapper = render(generateMenu(verticalProps));
    menuElement = wrapper.getByTestId("test-menu") as HTMLUListElement;
    expect(menuElement).toHaveClass("xr-menu menu-vertical");
  });
});
