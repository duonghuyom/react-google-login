// import { useEffect } from "react";
import "./App.css";
// import GoogleLogin from "react-google-login";
import { GoogleLogin } from "@react-oauth/google";
function App() {
  // const handleLogin = (data) => {
  //   console.log("data", data);
  // };
  // const handleFailure = (response) => {
  //   console.log("response", response);
  // };
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Login App</h1>
        <div>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
