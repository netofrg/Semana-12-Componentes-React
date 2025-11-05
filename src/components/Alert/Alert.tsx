import './Alert.css';

interface AlertProps {
  message: string;
  type?: 'success' | 'error' | 'warning';
}

export function Alert({ message, type = 'success' }: AlertProps) {
  return <div className={`alert ${type}`}>{message}</div>;
}
