// import React, { useState } from "react";
// import './LoginForm.css';
// import user_icon from '../login/Assets/person.png';
// import email_icon from '../login/Assets/email.png';
// import password_icon from '../login/Assets/password.png';
// import axios from 'axios'; // Correct import statement

// function LoginForm(){
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/login', formData);
//             console.log(response.data);
//         } catch (error) {
//             console.error('Login failed:', error);
//         }
//     };

//     const [action, setAction] = useState('Sign Up');

//     return(
//         <div className="container">
//             <div className="header">
//                 <div className="text">
//                     {action}
//                 </div>
//                 <div className="underline"></div>
//             </div>

//             <div className="inputs">
//                 {action === "Login" ? null : (
//                     <div className="input">
//                         <img src={user_icon} alt="" />
//                         <input
//                             type="text"
//                             placeholder="Name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                         />
//                     </div>
//                 )}
                
//                 <div className="input">
//                     <img src={email_icon} alt="" />
//                     <input
//                         type="email"
//                         placeholder="Email ID"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="input">
//                     <img src={password_icon} alt="" />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 {action === "Sign Up" ? null : (
//                     <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
//                 )}
                
//                 <div className="submit-container">
//                     <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>
//                         Sign Up
//                     </div>

//                     <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>
//                         Login
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LoginForm;

import React, { useState } from "react";
import './LoginForm.css';
import user_icon from '../login/Assets/person.png';
import email_icon from '../login/Assets/email.png';
import password_icon from '../login/Assets/password.png';
import axios from 'axios'; // Correct import statement

function LoginForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        userType: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const [action, setAction] = useState('Sign Up');

    return(
        <div className="container">
            <div className="header">
                <div className="text">
                    {action}
                </div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                )}
                
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input
                        type="email"
                        placeholder="Email ID"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                {action === "Sign Up" && formData.userType === ''}
                <div className="input">
                    <label style={{paddingLeft: '12px'}}>User Type:</label>
                    <select className="input-calls" name="userType" onChange={handleChange} required>
                        <option className="inputs" value="">Select</option>
                        <option className="inputs" value="tenant">Tenant</option>
                        <option className="inputs" value="landlord">Landlord</option>
                    </select>
                </div>

                {action === "Sign Up" ? null : (
                    <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
                )}
                
                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>
                        Sign Up
                    </div>

                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
