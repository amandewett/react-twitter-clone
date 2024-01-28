import "./Post.css";
import { Avatar } from "@mui/material";
import { Chat, Repeat, Favorite, Bookmark } from "@mui/icons-material";

const Post = () => {
  // https://youtu.be/rJjaqSTzOxI?t=6645
  return (
    <div className="postContainer">
      <Avatar src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" />
      <div className="post-text">
        <div className="postTitle">
          <h3 className="postUserName">Aman Dewett</h3>
          <h4 className="postUserTag">@amandewett</h4>
          <p className="postDate">
            <span>&#183;</span> Mar 20,2023
          </p>
        </div>
        <div className="postText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          ratione nesciunt explicabo recusandae esse ea animi mollitia! Dicta
          iure laboriosam eligendi quia facilis dolorum animi iste, labore
          doloremque possimus culpa
        </div>
        <div className="postIcons">
          <Chat />
          <Repeat />
          <Favorite />
          <Bookmark />
        </div>
      </div>
    </div>
  );
};

export default Post;
