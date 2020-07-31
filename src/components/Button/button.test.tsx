import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "./button";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: "primary",
  size: "lg",
  className: "klass",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("测试Button组件", () => {
  it("渲染一个default Button", () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    // console.log(element);
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
  it("渲染 Button, 基于不同的props", () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn btn-primary btn-lg klass");
  });
  it("渲染 Link Button", () => {
    const wrapper = render(
      <Button {...testProps} btnType="link" href="http://xiaoran.work">
        Link
      </Button>
    );
    const element = wrapper.getByText("Link");
    // console.log(element);
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
  });
  it("渲染 Disabled Button", () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
