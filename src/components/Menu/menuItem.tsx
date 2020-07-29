import React, { useContext } from "react";
import classnames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index?: string;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, className, disabled, style, children } = props;
  const context = useContext(MenuContext);
  // console.log(index, context.index);
  const classes = classnames("menu-item", className, {
    "is-active": context.index === index,
    "is-disabled": disabled,
  });
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === "string") {
      context.onSelect(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};
// Menu.defaultProps = {
//   defaultIndex: 0,
//   mode: "horizontal",
// };
MenuItem.displayName = "MenuItem";
export default MenuItem;
