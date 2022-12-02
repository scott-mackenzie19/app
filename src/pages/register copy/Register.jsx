import "./register.css"

export default function Register() {
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
            <input placeholder="Zipcode" className="loginInput" />
            <input placeholder="Bio" className="loginInput" />
            <input placeholder="Age" className="loginInput" />
            <input placeholder="City" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <div className="or">or</div>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
      
      </div>
  )
}
