import { useState } from 'react';
interface TextboxProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
  }
const Textbox: React.FC<TextboxProps> = ({ label, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};
export default Textbox;
  