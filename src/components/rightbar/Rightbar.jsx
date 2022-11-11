import "./rightbar.css"
import { Settings } from "@material-ui/icons"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="settingsContainer">
          <Settings className="settingsIcon"/>
          <div className="settingText">Settings</div>
        </div>
      </div>
    </div>
  )
}
