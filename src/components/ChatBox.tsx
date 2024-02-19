import styles from "./IdleScreen.module.css";
import { Button } from "./Button";

type Props = {
  chatMessages?: string[];
};

export function ChatBox({ chatMessages }: Props) {
  return (
    <div className={styles["chat-box"]}>
      {chatMessages?.map((message) => (
        <div>{message}</div>
      ))}
    </div>
  );
}
