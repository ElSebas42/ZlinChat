import { useState, useEffect, useContext } from "react";
import BotBubble from "./Bubbles/BotBubble";
import UserBubble from "./Bubbles/UserBubble";
import fetchChat from './fetchChat'
import { MainContext } from "../../context/MainContext";

function Chat() {
  const [chat, setChat] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { API_URL } = useContext(MainContext);

  useEffect(() => {
    fetchChat(API_URL, error, setChat, setIsLoading, setError)
  }, []);

  return (
    <div className="bg-slate-800 h-[100%] w-[80%] border-2 border-theme-2 border-t-0 border-b-0 z-0 overflow-auto flex flex-col">
      {chat.map((m) => {
        if (m.type === "Bot") {
          return <BotBubble text={m.text} char={m.char} key={m.id} />;
        } else {
          return <UserBubble text={m.text} char={m.char} key={m.id} />;
        }
      })}
    </div>
  );
}

export default Chat;
