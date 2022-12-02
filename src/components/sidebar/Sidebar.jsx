import "./sidebar.css"
import { RssFeed, Chat, Group, Event } from "@material-ui/icons"
import {  MyFriends } from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"
function handleClick2() {
    window.location.replace("http://localhost:3000/feed/profile/3");
  }
  function handleClick() {
    window.location.replace("http://localhost:3000/feed/profile/0");
  }
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className ="sidebarIcon" />
                    <span onClick={handleClick2} className="sidebarListItemText">Feed</span>
                </li>
                
                <li className="sidebarListItem">
                    <Event className ="sidebarIcon" />
                    <span onClick={handleClick2} className="sidebarListItemText">Events</span>
                </li>
            </ul>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                {MyFriends.map(u=> (
                    <CloseFriend onClick={handleClick} key={u.id} user={u}/>
                ))}
                
            </ul>
        </div>
        
    </div>
  )
}
