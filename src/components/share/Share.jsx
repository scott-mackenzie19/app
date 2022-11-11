import "./share.css";
import {PermMedia, Label, AccessTime, AddLocation} from '@material-ui/icons'

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="./assets/person/person4.jpg" alt="" />
                <input placeholder="Event Title" className="shareTitle" /> 
                <input placeholder="Event description" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className="shareIcon"/>
                        <span className="shareOptionText">Photo</span>
                    </div>
                    <div className="shareOption">
                        <Label className="shareIcon"/>
                        <span className="shareOptionText">Label</span>
                    </div>
                    <div className="shareOption">
                        <AccessTime className="shareIcon"/>
                        <span className="shareOptionText">Time</span>
                    </div>
                    <div className="shareOption">
                        <AddLocation className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
            
        </div>
    </div>
  )
}
