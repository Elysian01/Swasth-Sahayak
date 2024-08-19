import React from "react";
import axios from 'axios';
import { ChatEngine } from "react-chat-engine";
import { useSelector } from "react-redux";

import "./css/common.css";
import Navbar from "../components/misc/Navbar";

function DoctorChat() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <Navbar />
      <ChatEngine
        height="90vh"
        projectID="82db3e77-b9a8-49bf-9424-9e15c1cd40b8"
        userName={user}
        userSecret={user}
      />
    </div>
  );
}

export default DoctorChat;
