import styles from './Button.module.css';

type Props = {
  variant?: 'primary' | 'danger';
  loading?: boolean;
  disabled?: boolean;
  children: string;
  onClick: () => void;
  className?: string;
}

export function Button({ variant = 'primary', loading, children, onClick, disabled, className }: Props) {
  if (loading) {
    return <text>Connecting...</text>
  }

  return (
    <button  disabled={disabled} className={`${className} ${styles.button} ${styles[variant]} ${loading ? styles.loading : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}
