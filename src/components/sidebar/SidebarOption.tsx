import "./Sidebar.css";

const SidebarOption = ({ text, Icon, isActive }: any) => {
  return (
    <div className={`sidebarOption ${isActive && "active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
