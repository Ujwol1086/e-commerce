import React, { useState } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import usePost from "../hooks/usePost";

function AiChatWidget()
{
    const [count, setCount] = useState(0);
    const [chatWindowOpen, setChatWindowOpen] = useState(true);
    const { mutate, loading } = usePost(`${process.env.REACT_APP_API_URL}/chat`, {
        onSuccess: (res) =>
        {
            console.log(res)
            addResponseMessage(res?.result);
        },
        onError: () =>
        {
            addResponseMessage("Something went wrong. Please try again later.");
        }
    });

    const handleMessage = (message) =>
    {
        setCount((count) => count + 1);
        // addResponseMessage(message);
        mutate({
            input: message
        })
    };

    const handleToggle = (open) =>
    {
        setChatWindowOpen((prev) => !prev);
    };

    return (
        <>
            <Widget
                key={`chat-key-${count}`}
                handleToggle={handleToggle}
                handleNewUserMessage={handleMessage}
                title="Help Desk"
                subtitle=""
                profileAvatar="https://freelogopng.com/images/all_img/1681039084chatgpt-icon.png"
            />
        </>
    );
}

export default AiChatWidget;
