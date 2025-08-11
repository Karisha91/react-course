import { useState } from "react";
import "./LoginForm.css"

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div>
      <h1>Hello, welcome to my website</h1>
      <input 
        className="email-input"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      /><br/>
      <input 
        className="password-input"
        placeholder="Password"
        type={isShowPassword ? "text" : "password"}
        value={password}
        onChange={handlePasswordChange}
      /> 
      <button onClick={toggleShowPassword}>
        {isShowPassword ? "Hide" : "Show"}
      </button><br/>
      <button className="login-button">Login</button>
      <button className="sign-up-button">Sign up</button>
    </div>
  );
}

export default LoginForm;