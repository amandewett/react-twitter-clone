import "./Widget.css";
import { Search } from "@mui/icons-material";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widgetInput">
        <Search className="widgetSearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgetContainer">
        <h2>What is happening?</h2>
      </div>
    </div>
  );
};

export default Widget;
