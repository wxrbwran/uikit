import React from "react";
import classnames from "classnames";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type Animation =
  | "zoom-in-top"
  | "zoom-in-bottom"
  | "zoom-in-left"
  | "zoom-in-right";
interface TransitionProps extends CSSTransitionProps {
  className?: string;
  animation?: Animation;
}

const Transition: React.FC<TransitionProps> = (props) => {
  const { className, children, animation, ...restProps } = props;
  // const classes = classnames("xr-icon", className, {});
  return (
    <CSSTransition className={className || animation} {...restProps}>
      {children}
    </CSSTransition>
  );
};

Transition.displayName = "Transition";
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
};
export default Transition;
