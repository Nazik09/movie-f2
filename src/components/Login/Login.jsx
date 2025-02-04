
import React, { useState } from 'react';
import Img from "../../assets/Sally.svg";
import "./Login.css";
import Email from "../../assets/email.svg";
import Password from "../../assets/password.svg";
import Eye from "../../assets/eye.svg";
import EyeOff from "../../assets/eye.svg"; 

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };
    const handleLogin = () => {
        alert('Вы успешно авторизовались!');
    };

    return (
        <div className='app-container'>
            <img className='Sally' src={Img} alt="" />

            <div className='register'>
                <h2 className='text-white'>Login</h2>
             
                <input className='input' type="text" placeholder='Email' maxLength={30}/>
                <img className='email' width={30} height={30} src={Email} alt="Email" />
              
                
                    <input 
                        className='input' 
                        type={showPassword ? "text" : "password"} 
                        placeholder='Password' 
                        maxLength={8} 
                    />
                    <img 
                        className='password' 
                        width={30} 
                        height={30} 
                        src={Password} 
                        alt="Password" 
                    />
                    <img 
                        className='eye' 
                        width={30} 
                        height={30} 
                        src={showPassword ? Eye : EyeOff} 
                        alt="Toggle Password Visibility" 
                        onClick={togglePasswordVisibility} 
                    />
                    <div className='btn'>
                     <button onClick={handleLogin} className='button'>Login</button>
                     </div>
                </div>

               
            </div>
        
    );
};

export default Login;
