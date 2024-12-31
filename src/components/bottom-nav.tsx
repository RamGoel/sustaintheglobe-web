/* eslint-disable @typescript-eslint/no-explicit-any */
import profileIcon from "../assets/icons/ic_default_profile.svg";
import tasksIcon from "../assets/icons/ic_task.svg";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const location = useLocation();
  const navbarConfig = [
    {
      title: "home",
      icon: tasksIcon,
      route: "/",
    },
    {
      title: "profile",
      icon: profileIcon,
      route: "/profile",
    },
  ];
  return (
    <Paper
      className="w-full md:w-1/4 pb-3"
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, margin: "auto" }}
    >
      <BottomNavigation>
        {navbarConfig.map((item) => {
          return (
            <BottomNavigationAction
              component={Link}
              to={item.route}
              label={item.title}
              value={item.title}
              icon={
                <div>
                  <img
                    src={item.icon}
                    className={`pointer-events-none ${
                      location.pathname.includes(item.title)
                        ? "bg-green-100 p-2 transition-all rounded-full"
                        : "p-2 rounded-full"
                    }`}
                    width={40}
                    height={40}
                    alt="bottom-bar icon"
                  />
                  <p className="text-xs font-semibold">
                    {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                  </p>
                </div>
              }
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavbar;
