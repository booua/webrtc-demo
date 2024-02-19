import styles from "./IdleScreen.module.css";
import { Button } from "./Button";

type Props = {
  chatMessages?: string[];
};

export function ChatBox({ chatMessages }: Props) {
  console.log(chatMessages);
  return <div className={styles["chat-box"]}>chatbox</div>;
}
