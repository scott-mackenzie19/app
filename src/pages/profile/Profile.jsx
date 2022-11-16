import "./profile.css"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Feed from "../../components/feed/Feed"

export default function Profile() {
    return (
        <>
            <Topbar /> 
            <div className="profile">
            <Sidebar className="sidebar"/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/post/post3.jpeg" alt="" />
                            <img className="profileUserImg" src="assets/person/person6.jpg" alt="" />
                        </div>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">SuperScottie66</h4>
                        <span className="profileInfoDesc">This is my bio</span>
                    </div>
                    <div className="profileRightBottom">
                        <Feed profile/>
                        <Rightbar profile/>
                    </div>
                </div>

            </div>
        </>
    )
}
