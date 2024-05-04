import React from "react";
import axios from 'axios';
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import { useSelector } from "react-redux";

import "./css/common.css";
import Navbar from "../components/misc/Navbar";

function DoctorChat() {
  const user = useSelector((state) => state.auth.user);
  var axios = require("axios");

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.chatengine.io/users/",
    headers: {
      "PRIVATE-KEY": "ff81a502-c2dd-4c07-b0d8-ca93c03591dd",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div>
      <Navbar />
      <ChatEngine
        height="90vh"
        projectID="a726c989-24aa-4104-bbc6-678e11880f84"
        userName={user}
        userSecret={user}
      />
    </div>
  );
}

export default DoctorChat;
