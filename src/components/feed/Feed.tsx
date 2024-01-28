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
      <Post
        userName={"Aman Dewett"}
        userTag={"amandewett"}
        date={"Mar 16, 2023"}
        postText={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv"
        }
        postImage={
          "https://i.pinimg.com/originals/0c/64/9a/0c649a17ec1e5f5ca340248b4ef4e4be.gif"
        }
      />
      <Post
        userName={"Aman Dewett"}
        userTag={"amandewett"}
        date={"Mar 16, 2023"}
        postText={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv"
        }
        postImage={null}
      />
    </div>
  );
};

export default Feed;
