import "./Feed.css";
import { TweetBox, Post } from "../";
import { useState, useEffect } from "react";
import { DB, dateFormatter } from "../../utils";
import { collection, getDocs } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsCollection = collection(DB, "posts");
      const postsSnapshot = await getDocs(postsCollection);
      const postsList: any = postsSnapshot.docs.map((doc) => doc.data());
      setPosts(postsList);
    };
    getPosts();
  }, [DB]);

  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>
      <TweetBox refreshFeed={setPosts} />

      {/* list of posts */}
      {posts.map((post: any) => {
        return (
          <Post
            key={post.date.nanoseconds}
            avatar={post.userAvatar}
            userName={post.userName}
            userTag={post.userTag}
            date={dateFormatter(post.date)}
            postText={post.text}
            postImage={post.img}
          />
        );
      })}
    </div>
  );
};

export default Feed;
