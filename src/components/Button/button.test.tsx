import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

describe("测试Button组件", () => {
  it("渲染一个default Button", () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.getByText("Nice");
    // console.log(element);
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
  });
  it("渲染 Button, 基于不同的props", () => {});
  it("渲染 Link Button", () => {});
  it("渲染 Disabled Button", () => {});
});
