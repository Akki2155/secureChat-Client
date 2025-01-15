import React from 'react'


import "./AuthForm.scss";
import Input from '../Input/Input';

const AuthForm = ({formData, setFormData, isLogin, setIsLogin}) => {

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  return (
    <>
        <h3 className="form-heading">{isLogin ? "Login" : "Register"}</h3>
        <div className="inputContainers">
          {!isLogin && (
            <>
              <div className="firstNameContainer">
                <Input
                  placeholder="Enter First Name"
                  type="text"
                  label="First Name"
                  labelStyle={{
                    fontSize: "1.2rem",
                  }}
                  handleChange={handleChange}
                  name="firstName"
                />
              </div>
              <div className="middleNameContainer">
                <Input
                  placeholder="Enter middle Name"
                  type="text"
                  label="Middle Name"
                  labelStyle={{
                    fontSize: "1.2rem",
                  }}
                  handleChange={handleChange}
                  name="middleName"
                />
              </div>
              <div className="lastNameContainer">
                <Input
                  placeholder="Enter last Name"
                  type="text"
                  label="Last Name"
                  labelStyle={{
                    fontSize: "1.2rem",
                  }}
                  handleChange={handleChange}
                  name="lastName"
                />
              </div>
              <div className="phoneNumber">
                <Input
                  placeholder="Enter Phone No"
                  type="number"
                  label="Phone No"
                  labelStyle={{
                    fontSize: "1.2rem",
                  }}
                  handleChange={handleChange}
                  name="phoneNumber"
                />
              </div>
            </>
          )}

          <div className="emailContainer">
            <Input
              placeholder="Enter registered email"
              type="text"
              label="Email"
              labelStyle={{
                fontSize: "1.2rem",
              }}
              handleChange={handleChange}
              name="emailId"
            />
          </div>
          {
            !isLogin && 
            <div className="passwordContainer">
            <Input
              placeholder="Enter Password"
              type="text"
              label="Password"
              labelStyle={{
                fontSize: "1.2rem",
              }}
              handleChange={handleChange}
              name="confirmPassword"
            />
          </div>
          }
          <div className="passwordContainer">
            <Input
              placeholder= {isLogin ? "Enter Password": "Confirm Password"} 
              type="password"
              label= {isLogin ? "Password": "Confirm Password"} 
              labelStyle={{
                fontSize: "1.2rem",
              }}
              handleChange={handleChange}
              name="password"
            />
          </div>
        </div>
        {isLogin && (
          <div className="authToggleContainer">
            <p>Forgot Password ?</p>
          </div>
        )}
        <div className="authToggleContainer">
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "New User ? Register !" : "Already User ? Login !"}
          </p>
        </div>
    </>
  )
}

export default AuthForm