import React, { useContext, Children, useState } from "react";
import classnames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  // disabled?: boolean;
  style?: React.CSSProperties;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const context = useContext(MenuContext);
  const { index, title, className, children } = props;
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpened =
    index && context.mode === "vertical"
      ? openedSubMenus.includes(index)
      : false;
  const [menuOpen, setOpen] = useState(isOpened);

  // console.log(index, context.index);
  const classes = classnames("menu-item submenu-item", className, {
    "is-active": context.index === index,
    // "is-disabled": disabled,
  });
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };
  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvents =
    context.mode === "horizontal"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};
  const renderChildren = () => {
    const subMenuClasses = classnames("xr-submenu", {
      "menu-opened": menuOpen,
    });
    const childrenElement = Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error(
          "Warning: SubMenu has a child which is not MenuItem type!"
        );
      }
    });
    return <ul className={subMenuClasses}>{childrenElement}</ul>;
  };
  return (
    <li key={index} className={classes} {...clickEvents} {...hoverEvents}>
      <div className="submenu-title">{title}</div>
      {renderChildren()}
    </li>
  );
};
// Menu.defaultProps = {
//   defaultIndex: 0,
//   mode: "horizontal",
// };
SubMenu.displayName = "SubMenu";
export default SubMenu;
