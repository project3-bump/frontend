import React, { useState } from "react";
import LogIn from "./LogIn";
import App from "./App";
import UserContext from "../context/user";

function Primary() {
  const [accessToken, setAccessToken] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [id, setID] = useState(""); //Server generated _id is entered into state here because the _id is a response from the Login function used in the LogIn component. _id is propped into App for Jovy to use.
  return (
    <UserContext.Provider value={{ accessToken, setAccessToken }}>
      {accessToken.length > 0 && <App id={id} />}
      {accessToken.length === 0 && showLogin && (
        <LogIn setID={setID} setShowLogin={setShowLogin} />
      )}
    </UserContext.Provider>
  );
}

export default Primary;

//Lian Kai here. I created the Primary component to wrap around LogIn and App, since App is conditionally rendered depending on LogIn's access token
