import "./sidebar.css"
import { RssFeed, Chat, Group, Event } from "@material-ui/icons"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className ="sidebarIcon" />
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className ="sidebarIcon" />
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <Group className ="sidebarIcon" />
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <Event className ="sidebarIcon" />
                    <span className="sidebarListItemText">Events</span>
                </li>
            </ul>
            <button className="sidebarButton">Show more</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="./assets/person/person1.jfif" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Jane</span>
                </li>
                <li className="sidebarFriend">
                    <img src="./assets/person/person6.jpg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Shmichael</span>
                </li>
                <li className="sidebarFriend">
                    <img src="./assets/person/person3.jfif" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Zimbabwe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="./assets/person/person5.jpg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Shmoike</span>
                </li>
                <li className="sidebarFriend">
                    <img src="./assets/person/person2.jpg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">John</span>
                </li>
                <li className="sidebarFriend">
                    <img src="./assets/person/person4.jpg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Scott</span>
                </li>
                <li className="sidebarFriend">
                    <img src="./assets/person/person6.jpg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">JJ</span>
                </li>
                <li className="sidebarFriend">
                    <img src="./assets/person/person5.jpg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Ben</span>
                </li>
                <li className="sidebarFriend">
                    <img src="./assets/person/person4.jpg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Lego Batman</span>
                </li>
                <li className="sidebarFriend">
                    <img src="./assets/person/person3.jfif" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Lego Batman 2</span>
                </li>
                <li className="sidebarFriend">
                    <img src="./assets/person/person2.jpg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Ben Dover</span>
                </li>
            </ul>
        </div>
        
    </div>
  )
}
