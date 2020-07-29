import React, { createContext, useState, Children } from "react";
import classnames from "classnames";
import { MenuItemProps } from "./menuItem";

type SelectCallback = (selectedIndex: string) => void;

type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  defaultOpenSubMenus?: string[];
  onSelect?: SelectCallback;
}
export interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: "0" });
const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classnames("xr-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };
  const renderChildren = Children.map(children, (child, index) => {
    const childElement = child as React.FunctionComponentElement<MenuItemProps>;
    const { displayName } = childElement.type;
    if (displayName === "MenuItem" || displayName === "SubMenu") {
      return React.cloneElement(childElement, {
        index: index.toString(),
      });
    } else {
      console.error("Warning: Menu has a child which is not MenuItem type!");
    }
  });

  return (
    <ul data-testid="test-menu" className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren}
      </MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
};
export default Menu;
