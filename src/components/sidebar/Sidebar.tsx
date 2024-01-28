import "./Sidebar.css";
import {
  X,
  Home,
  Search,
  Notifications,
  Email,
  Person,
  MoreHoriz,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { SidebarOption } from "../";

const Sidebar = () => {
  return (
    <div className="sidebar text-color">
      <X />
      <SidebarOption text="Home" Icon={Home} isActive={true} />
      <SidebarOption text="Explore" Icon={Search} />
      <SidebarOption text="Notifications" Icon={Notifications} />
      <SidebarOption text="Messages" Icon={Email} />
      <SidebarOption text="Profile" Icon={Person} />
      <SidebarOption text="More" Icon={MoreHoriz} />
      <Button variant="contained" className="side-post-bt">
        POST
      </Button>
    </div>
  );
};

export default Sidebar;
