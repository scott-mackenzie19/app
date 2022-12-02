import "./login.css"

function handleClick() {
  window.location = "/feed"
}

function handleClick2() {
  window.location = "/register"
}

export default function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Event Social</h3>
          <span className="loginDesc">
            Connect with the world around you.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button onClick={handleClick} className="loginButton">Log In</button>
            <button onClick={handleClick2} className="loginRegisterButton">Create a New Account</button>
          </div>
        </div>
      </div>
      
      </div>
  )
}
