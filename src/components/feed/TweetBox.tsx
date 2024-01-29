import "./Feed.css";
import { Avatar, Button } from "@mui/material";
import { useState } from "react";
import { DB } from "../../utils";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";

const TweetBox = ({ refreshFeed }: any) => {
  const [postContent, setPostContent] = useState("");
  function handlePost(event: any) {
    event.preventDefault();
    const data = {
      date: Timestamp.fromDate(new Date()),
      img: null,
      text: postContent,
      userAvatar:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      userName: "Aman Dewett",
      userTag: "amandewett",
    };

    addDoc(collection(DB, "posts"), data).then(() => {
      setPostContent("");
      getPosts();
    });
  }

  const getPosts = async () => {
    const postsCollection = collection(DB, "posts");
    const postsSnapshot = await getDocs(postsCollection);
    const postsList: any = postsSnapshot.docs.map((doc) => doc.data());
    refreshFeed(postsList);
  };
  return (
    <>
      <div className="tweetBoxContainer">
        <form onSubmit={handlePost}>
          <div className="tweetInput">
            <Avatar
              className="user-avatar"
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            />
            <textarea
              placeholder="What is happening?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </div>
          <Button
            type="button"
            className="bt-post"
            variant="contained"
            onClick={handlePost}
          >
            Post
          </Button>
        </form>
      </div>
    </>
  );
};

export default TweetBox;
