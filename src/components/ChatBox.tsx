import styles from "./IdleScreen.module.css";

type Props = {
  chatMessages?: string[];
};

export function ChatBox({ chatMessages }: Props) {
  return (
    <div className={styles["chat-box"]}>
      {chatMessages?.map((message, idx) => (
        <div key={`${idx}-${message.length}`}>{message}</div>
      ))}
    </div>
  );
}
