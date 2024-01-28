import "./Post.css";
import { Avatar } from "@mui/material";
import {
  Chat,
  Repeat,
  Favorite,
  Bookmark,
  Verfied,
  Verified,
} from "@mui/icons-material";

const Post = ({ userName, userTag, date, postText, postImage }: any) => {
  // https://youtu.be/rJjaqSTzOxI?t=6645
  return (
    <div className="postContainer">
      {/* post avatar */}
      <Avatar src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" />
      {/* post header div */}
      <div className="post-text">
        <div className="postTitle">
          <h3 className="postUserName">
            {userName}{" "}
            <span>
              <Verified className="postVerifiedIcon" />
            </span>
          </h3>
          <h4 className="postUserTag">{`@${userTag}`}</h4>
          <p className="postDate">
            <span>&#183;</span> {date}
          </p>
        </div>
        {/* post content below */}
        <p className="postText">{postText}</p>
        {postImage && <img className="postImage" src={postImage} />}
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
