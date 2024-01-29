import "./Widget.css";
// import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import { Search } from "@mui/icons-material";
// import { CircularProgress } from "@mui/material";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widgetInput">
        <Search className="widgetSearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgetContainer">
        <h2>What is happening?</h2>
        {/* <TwitterTweetEmbed
          tweetId="1711473801555263934"
          placeholder={<CircularProgress color="primary" />}
        />
        <TwitterTimelineEmbed
          theme="dark"
          sourceType="profile"
          placeholder={<CircularProgress color="primary" />}
          screenName="much_questions"
          options={{ height: 350 }}
        /> */}
      </div>
    </div>
  );
};

export default Widget;
