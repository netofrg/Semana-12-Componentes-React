import './Modal.css';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ title, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{title}</h2>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
