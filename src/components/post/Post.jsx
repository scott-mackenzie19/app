import "./post.css"
import { MoreVert, AddLocation, AccessTime } from "@material-ui/icons"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="./assets/person/person3.jfif" alt="" />
                    <span className="postUsername">SuperScottie66</span>
                    <span className="postTime">5 min ago</span>
                </div>
                <div className="postTopRight">
                <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <div className="postTitleText">Scott's Birthday Bash</div>
                <div className="postLocationWrapper">
                    <AddLocation className="postLocationIcon"/>
                    <div className="postLocationText">Terry Park</div>
                </div>
                <div className="postLocationWrapper">
                    <AccessTime className="postLocationIcon"/>
                    <div className="postLocationText">7:00pm - 8:50pm</div>
                </div>
                <span className="postText"> First Post wlmfwelfnwelfwelfwelkfwelkfjwelkfjekfjqekjfa;kj;qwdj;qwj;wq uhqiudiqwuhdqwuidhiqwuhdiuqwhdiwqdhqiudhqwiuduilgfiwqgrqiykwgrqw birthday</span>
                <img className="postImg" src="./assets/post/post1.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="postLikeIcon" src="./assets/like.png" alt="" />
                    <img className="postLikeIcon" src="./assets/heart.png" alt="" />
                    <span className="postLikeCounter">32 People like this</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
