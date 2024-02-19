import styles from "./IdleScreen.module.css";
import { Button } from "./Button";
import { ChatBox } from "./ChatBox";
import { useState } from "react";

type Props = {
  status: "idle" | "calling";
  chatMessages: string[];
  onSendMessage: (chatText: string) => void;
  onDisconnect: () => void;
  remoteRef: React.RefObject<HTMLVideoElement>;
  localRef: React.RefObject<HTMLVideoElement>;
};

export function ChatScreen({
  status,
  onSendMessage,
  chatMessages,
  onDisconnect,
  remoteRef,
  localRef,
}: Props) {
  const [message, setMessage] = useState("");
  const handleInput = (e) => {
    const val = e.target.value;
    setMessage(val);
  };

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      onSendMessage(message);
      console.log("sending", message);
      setMessage("");
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
        <Button variant="danger" onClick={onDisconnect}>
          End chat
        </Button>
      </div>
    </div>
  );
}
