import "./Feed.css";
import { Avatar, Button } from "@mui/material";

const TweetBox = () => {
  return (
    <>
      <div className="tweetBoxContainer">
        <form>
          <div className="tweetInput">
            <Avatar src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />
            <textarea placeholder="What is happening?" />
          </div>
          <Button className="bt-post" variant="contained">
            Post
          </Button>
        </form>
      </div>
    </>
  );
};

export default TweetBox;
