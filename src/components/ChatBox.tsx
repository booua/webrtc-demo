import styles from "./IdleScreen.module.css";
import chatStyles from "./ChatBox.module.css";
import { Message } from "../App";

type Props = {
  chatMessages?: Message[];
};

export function ChatBox({ chatMessages }: Props) {
  return (
    <div className={styles["chat-box"]}>
      {chatMessages?.map(({ body, color, username }, idx) => (
        <div
          key={`${idx}-${body?.length}`}
          className={chatStyles["chat-message"]}
        >
          <h3 color={color}>{username}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}
