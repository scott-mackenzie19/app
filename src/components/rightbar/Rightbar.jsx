import "./rightbar.css"
import { Settings } from "@material-ui/icons"

export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (
      <div className="settingsContainer">
        <Settings className="settingsIcon" />
        <div className="settingText">Settings</div>
      </div>

    )
  }

  const ProfileRightBar = () => {
    return (
      <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Zipcode:</span>
                <span className="rightbarInfoValue">75205</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Age:</span>
                <span className="rightbarInfoValue">21</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">Dallas</span>
              </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img src="assets/person/person1.jfif" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Braiden Hooke</span>
              </div>
              <div className="rightbarFollowing">
                <img src="assets/person/person3.jfif" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Braiden Hooke</span>
              </div>
              <div className="rightbarFollowing">
                <img src="assets/person/person2.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Braiden Hooke</span>
              </div>
              <div className="rightbarFollowing">
                <img src="assets/person/person1.jfif" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Braiden Hooke</span>
              </div>
              <div className="rightbarFollowing">
                <img src="assets/person/person6.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Braiden Hooke</span>
              </div>
            </div>
      </>
    )
  }
  if (profile) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  )
}
else {
  return (
  <div className="rightbar">
  <div className="rightbarWrapper">
    <HomeRightbar />
  </div>
</div>
  )
}
}
