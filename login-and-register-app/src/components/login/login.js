import React, {useState} from "react"
import "./login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom"



const Login = ({setLoginUser}) =>
{
//create state by using user state
const navigate = useNavigate();
const [ user, setUser ] = useState({
    email:"",
    password:""
}) 

//onchange function change in input field
//this change the input button which and set the value of object

const handleChange = (e) =>
{
    // console.log(e.target);
    const { name, value } = e.target
    console.log(name,value)
    setUser({
        ...user,//... dot spread oparator
        [name]:value
    })
}

const login = async(e) => {
    e.preventDefault();
    try
    {
    const response =  await axios.post("http://localhost:9002/login",user) 
        alert(response.data.message)
        console.log("User information:", response.data.existingUser);
        setLoginUser(response.data.existingUser)
        //set empty auto matically after click login button
        setUser(
          {
            email:"",
            password:"",
          }
        );
        navigate("/")
    // message  display in alert box like login successfully
    // console.log(response.data);
    }

    catch(error)
    {
        // .catch(err => console.error(err));
        console.error("Login error",error);
        console.error("Navigation error",error);
    }
}

    return (
        <body>
        <header>  
          <h2 class="logo">logo</h2>
        </header>
        <div className="wrapper">
          {/* <span className="icon-close"><ion-icon name="close-outline"></ion-icon></span> */}
          <div className="form-box login">
            <h2>Login</h2>
            <form id="loginform">
            <div className="input-box">
              {/* <span className="icon"><ion-icon name="mail-outline"></ion-icon></span> */}
              <input type="email" required name="email" value={user.email} onChange={handleChange} placeholder="Enter Your Email" />
            </div>
            <div className="input-box">
              {/* <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span> */}
              <input type="password" required name="password" value={user.password} onChange={handleChange} placeholder="Enter Your Password" />
            </div>
           
            <button type="submit" className="btn" onClick={login}>Login</button>
            {/* <div className="remember-forgot"> */}
              {/* <p >Recover password?   */}
              {/* <a href="#">Forgot Password</a> */}
              {/* </p> */}
            {/* </div> */}
            <div className="remember-forgot">
              <p>Don't have an account?
                <a href="#" className="register-link" onClick={() => navigate("/register")}>Register</a>
              </p>
            </div>
            </form>
          </div>
        </div>
      </body>
    )

}

export default Login