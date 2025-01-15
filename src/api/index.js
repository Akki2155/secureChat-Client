import axios from "axios";

const API= axios.create({ baseURL: "http://127.0.0.1:5000/" });

API.interceptors.request.use((req)=>{
    try {
        if(localStorage.getItem("token")){
            console.log(localStorage.getItem("token"));
            
            req.headers.Authorization=`Bearer ${localStorage.getItem("token")}`
        }else{
            req.headers.Authorization=`Attack`;
        }

        return req;
    } catch (error) {
        console.error(`Interceptor Error ${error}`);
    }
});

//Auth Calls
export const userSignIn=(formData)=> API.post("/users/login", formData);
export const userRegister=(formData)=> API.post("/users/createuser", formData);
export const userSignOut=(token)=> API.post("/users/logout", token);
export const userDelete=(userEmail)=> API.delete("/users/deleteuser", userEmail);