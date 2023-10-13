import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { publicRoutes } from "../../routes";
import styles from "./Sidebar.module.scss";
import { MenuBar } from "../../assets/icon";

const cx = require("classnames/bind").bind(styles);
function Sidebar() {
  const location = useLocation();
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleSidebar = () => () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <div className={cx("page-sidebar")}>
      <div className={cx("toggle-btn")} onClick={handleSidebar()}>
        <MenuBar />
      </div>
      <aside className={cx(toggleSidebar ? "active-sidebar" : "")}>
        <ul>
          {publicRoutes.map((route, index) => {
            return (
              <li
                key={index}
                className={cx(
                  "page-sidebar-item",
                  location.pathname == route.path ? "sidebar-item-active" : ""
                )}
              >
                <NavLink
                  to={route.path}
                  className={cx(
                    location.pathname == route.path ? "sidebar-item-active" : ""
                  )}
                >
                  {route.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
