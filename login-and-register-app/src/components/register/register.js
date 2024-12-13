import React, { useState } from "react"  //useState use for state manage
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Register = () =>
{
    //create state by using user state
    const navigate = useNavigate();
    const [ user, setUser ] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    }) 

    //onchange function change in input field
    //this change the input button which and set the value of object

    const handleChange = e =>
    {
        // console.log(e.target);
        const { name, value } = e.target
        console.log(name,value)
        setUser({
            ...user,//... dot spread oparator
            [name]:value
        })
    }

    const register = () => 
    {
        const { name, email, password ,reEnterPassword} = user
        if(name && email && password && (password === reEnterPassword))
        {
            // alert("Posted")
            axios.post("http://localhost:9002/register",user)//local server request
            .then( res => {
                alert(res.data.message)
                navigate("/login")
                // setTimeout(() => navigate("/login"), 100);
            })
            .catch(error => {
                console.error("Registration failed:", error);
                alert("Registration failed. Please try again.");
            });
        }
        else
        {
            alert("invalid input");
        }
        
    }

    return (
        <body>
        <header>
            <h2 class="logo">logo</h2>
        </header>

        
            <div class="wrapperr">
            <div class="form-boxr register">
            <h2>Registration</h2>
                <form action="#" id="registrationForm">
                    <div class="input-boxr">
{/* <!--user  logo--><span class="icon"><ion-icon name="person-outline"></ion-icon></ion-icon></span>  */}
<input type="text" required placeholder="Username" id="runame" name="name" value={user.name} onChange={ handleChange } ></input>
                {/* <!-- <label for="">Username</label> --> */}
            </div>
            <div class="input-box">
{/* <!--email logo--><span class="icon"><ion-icon name="mail-outline"></ion-icon></span>  */}
<input type="text" required name="email" value={user.email} id="remail" placeholder="Enter Your Email" onChange={ handleChange }></input>
                {/* <!-- <label for="">E-mail</label> --> */}
            </div>
            <div class="input-box">
{/* <!--password logo--><span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span> */}
<input type="password" required name="password" value={user.password} id="rpwd" placeholder="Set Password" onChange={ handleChange }></input>
                {/* <!-- <label for="">password</label> --> */}
            </div>
            <div class="input-box">
{/* <!--password logo--><span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span> */}
<input type="password" required name="reEnterPassword" value={user.reEnterPassword} id="rrpwd" placeholder="Re-enter Password" onChange={ handleChange }></input>
                {/* <!-- <label for="">password</label> --> */}
            </div>
                
            <button type="submit" className="btnr" value="submit" onClick={register}>Register</button>
                <div className="login-registerr">
                    <p>Already have an account?
                        <a href="#" className="login-link" onClick={() => navigate("/login")}>Login</a>
                    </p>
                </div>
        </form>
    </div>
</div>
</body>


        // <div className="register">
        //     { console.log("user",user)}
        //     <h1>Register</h1>
        //     <input type="text" name="name" value={user.name} placeholder="User Name" onChange={ handleChange }></input>
        //     <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={ handleChange }></input>
        //     <input type="password" name="password" value={user.password} placeholder="Set Password" onChange={ handleChange }></input>
        //     <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>

            
        //     <div className="button" onClick={register}>Register</div>
        //     <div>or</div>
        //     <div className="button" onClick={() => navigate("/login")}>Login</div>
        // </div>
    )
}

export default Register