import React, { useEffect, useState } from "react";
import "./Login.scss";
import Input from "../../components/Input/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin, userRegistration } from "../../state/actions/auth";
import AuthForm from "../../components/AuthForm/AuthForm";

const Login = () => {
  const formIntialState = {
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    emailId: "",
    password: "",
    confirmPassword: "",
    isRememberEnabled: false,
  };

  const [formData, setFormData] = useState(formIntialState);
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      phoneNumber: "",
      emailId: "",
      password: "",
      confirmPassword: "",
      isRememberEnabled: false,
    })
  },[isLogin]);

  const authAPICall = () => {
    if (isLogin) {
      dispatch(
        userLogin(
          {
            emailId: formData?.emailId,
            password: formData?.password,
            isRemeberMeEnabled: formData?.isRememberEnabled,
          },
          navigate
        )
      );
    } else {
      if (formData?.confirmPassword != formData?.password) {
        alert("Pasword Not Matched");
        setFormData(formIntialState); //find bug
        return;
      }
      dispatch(
        userRegistration(
          {
            username: {
              first: formData?.firstName,
              middle: formData?.middleName,
              last: formData?.lastName,
            },
            emailId: formData?.emailId,
            password: formData?.password,
            phonenumber: formData?.phoneNumber,
          },
          navigate
        )
      );
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="header-container">
          <img src="/logo.jpg" alt="app-logo" />
          <h2>Secure Chat</h2>
        </div>
        <AuthForm
          formData={formData}
          setFormData={setFormData}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
        <div className="buttonContainer">
          <button onClick={() => authAPICall()}>
            {!isLogin ? "Register As User" : "Login As User"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
