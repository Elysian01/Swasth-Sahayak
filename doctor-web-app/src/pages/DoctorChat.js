import React from "react";

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
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
        projectID="
                a726c989-24aa-4104-bbc6-678e11880f84"
        userName={user}
        userSecret={user}
      />
    </div>
  );
}

export default DoctorChat;
