import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChatEngine } from 'react-chat-engine';
import { getRequest } from "../components/Api/api";
import "./css/common.css";
import Navbar from "../components/misc/Navbar";


function DoctorChat() {
    
    return (
        <div>
            <Navbar />
            <ChatEngine
                projectID='
                a726c989-24aa-4104-bbc6-678e11880f84'
                userName='priyanshugupta753@gmail.com'
                userSecret='8126793237'
            />
        </div>
    )
}

export default DoctorChat;