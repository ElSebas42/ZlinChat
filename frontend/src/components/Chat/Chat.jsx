import BotBubble from "./Bubbles/BotBubble";
import example from "../example.json";

function Chat() {
  let chat;

  for (let i = 1; i < 3; i++) {
    let from = example[i][0]
    switch (from) {
      case "Bot":
        chat = <>
          {chat}
          <BotBubble text={example[i][1]} from={from}/>
        </>
    }
  }

  return (
    <div className="bg-slate-800 h-[100%] w-[80%] border-2 border-theme-2 border-t-0 border-b-0 z-0 overflow-scroll">
      {chat}
    </div>
  );
}

export default Chat;