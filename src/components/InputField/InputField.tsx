import './InputField.css';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
}

export function InputField({ label, value, onChange }: InputFieldProps) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
