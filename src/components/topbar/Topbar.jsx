import "./topbar.css"
import {Search, Person, Chat, Notifications} from "@material-ui/icons"
function handleClick() {
  window.location = "/feed"
}
function handleClick2() {
  window.location.replace("http://localhost:3000/feed/profile/3");
}

export default function topBar() {
  return (
    <div className ="topbarContainer">
        <div className ="topbarLeft">
            <span onClick={handleClick} className="logo">Event Social</span>
        </div>
        <div className ="topbarCenter">
            <div className="searchbar">
              <Search className="searchIcon"/>
              <input placeholder="Search for friend, or post."type="text" className="searchInput" />

            </div>
            </div>
        <div className ="topbarRight">
          <div className="topbarLinks">
                <span onClick={handleClick} className="topbarLink">Homepage</span>
          </div>
          <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person onClick={handleClick2}/>
                <span className="topbarIconBadge"> 1</span>
              </div>
              <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge"> 2</span>
              </div>
              <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge"> 1</span>
              </div>
          </div>
          <span onClick={handleClick2}>
          <img src="./assets/person/person4.jpg" alt="" className="topbarImg" />
          </span>
        </div>
    </div>
  );
}
