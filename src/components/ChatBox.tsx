import styles from "./IdleScreen.module.css";
import { Button } from "./Button";
import chatStyles from "./ChatBox.module.css";

type Props = {
  chatMessages?: string[];
};

export function ChatBox({ chatMessages }: Props) {
  return (
    <div className={styles["chat-box"]}>
      {chatMessages?.map((message) => (
        <div className={chatStyles["chat-message"]}>{message}</div>
      ))}
    </div>
  );
}
