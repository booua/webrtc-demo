import styles from "./IdleScreen.module.css";
import { Button } from "./Button";
import { ChatBox } from "./ChatBox";
import { useState } from "react";
import { Message } from "../App";

type Props = {
  status: "idle" | "calling";
  chatMessages: Message[];
  onSendMessage: (chatText: string) => void;
  onDisconnect: () => void;
};

export function ChatScreen({
  status,
  onSendMessage,
  chatMessages,
  onDisconnect,
}: Props) {
  const [message, setMessage] = useState("");
  const handleInput = (e) => {
    const val = e.target.value;
    setMessage(val);
  };

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      sendMessage(message)
    }
  };

  const sendMessage = (message: string) => {
    try {
      onSendMessage(message);
      console.log("sending", message);
      setMessage("");
    } catch (error) {
      console.log("sendMessage error", error)
    }
  };

  return (
    <div className={styles["idle-page"]}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ChatBox chatMessages={chatMessages} />
        <textarea
          id="dataChannelSend"
          value={message}
          onKeyDown={onEnterPress}
          onChange={handleInput}
        ></textarea>
        <Button className={styles["submit-button"]} variant="primary" onClick={() => sendMessage(message)}>Send</Button>
        <Button variant="danger" onClick={onDisconnect}>
          End chat
        </Button>
    </div>
    </div>
  );
}
