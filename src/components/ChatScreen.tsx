import styles from "./IdleScreen.module.css";
import { Button } from "./Button";
import { ChatBox } from "./ChatBox";

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
  const handleInput = (e) => {
    const val = e.target.value;
    onSendMessage(val);
  };
  return (
    <div className={styles["idle-page"]}>
      <div>
        <ChatBox chatMessages={chatMessages} />
        <textarea id="dataChannelSend" onChange={handleInput}></textarea>
        <Button variant="danger" onClick={onDisconnect}>
          End chat
        </Button>
      </div>
    </div>
  );
}
