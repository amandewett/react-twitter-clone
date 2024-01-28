import "./Feed.css";
import { TweetBox, Post } from "../";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>
      <TweetBox />

      {/* list of posts */}
      <Post />
    </div>
  );
};

export default Feed;
