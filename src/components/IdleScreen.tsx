import React from 'react';
import styles from './IdleScreen.module.css';
import { Button } from './Button';

type Props = {
  onStartCall: () => void;
  username: string;
  setUsername: (username: string) => void;
  color: string;
  setColor: (color: string) => void;
  disabled?: boolean;
};

export function IdleScreen({ onStartCall, username, color, setUsername, setColor, disabled }: Props) {
  const onColorChange = (event: React.FormEvent<HTMLInputElement>) => {
    setColor(event.currentTarget.value);
  };
  const onUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  return (
    <div className={styles['idle-page']}>
      <div>
        <h1 className={styles.title}>Welcome!</h1>
        <h2>Enter your username and choose your color 🌈</h2>
        <form className={styles.form}>
          <input type="text" value={username} onChange={onUsernameChange} />
          <input type="color" value={color} onChange={onColorChange} />
        </form>

        <Button disabled={disabled} onClick={onStartCall}>
          Start call
        </Button>
      </div>
    </div>
  );
}
