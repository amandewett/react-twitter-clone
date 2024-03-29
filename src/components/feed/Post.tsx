import "./Post.css";
import { Avatar } from "@mui/material";
import { forwardRef } from "react";
import {
  Chat,
  Repeat,
  Favorite,
  Bookmark,
  Verified,
} from "@mui/icons-material";

const Post = forwardRef(
  ({ avatar, userName, userTag, date, postText, postImage }: any, ref: any) => {
    return (
      <div ref={ref} className="postContainer">
        {/* post avatar */}
        <Avatar className="user-avatar" src={avatar} />
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
  }
);

export default Post;
