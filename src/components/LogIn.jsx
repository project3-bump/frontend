import React, { useContext, useState } from "react";
import { fetchData } from "../helpers/common";
import jwt_decode from "jwt-decode";
import UserContext from "../context/user";

function LogIn(props) {
  const userCtx = useContext(UserContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { ok, data } = await fetchData(
      "/bump/auth/login",
      undefined,
      "POST",
      {
        name,
        password,
      }
    );

    if (ok) {
      userCtx.setAccessToken(data.access);
      props.setID(data._id);
      props.setQueryManager(data.isManager);
      console.log("Debug", data._id, data.isManager);
    } else {
      console.log("Debug", data);
    }
  };
  return (
    <div
      className="container"
      style={{ backgroundColor: "#325A55" }}
      justify-content="center"
      align-items="center"
    >
      <img className="BumpLogo" src="../../pictures/Bump-Logo.png" />

      <br />

      <input
        id="Name"
        type="string"
        placeholder="Name"
        size="50"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        id="Password"
        type="password"
        placeholder="Password"
        size="50"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button id="Log In btn" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
}

export default LogIn;
