import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useSelector } from "react-redux";
const ChatApp = () => {
    const user = useSelector((state) => state.auth.user);
    return (
        <div>
            ChatApp
            <ChatEngine
                projectID='a726c989-24aa-4104-bbc6-678e11880f84'
                userName={user}
                userSecret={user}
            />
        </div>
    )
}

export default ChatApp