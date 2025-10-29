interface ColorInputProps {
  onColorChange: (color: string) => void;
}

function ColorInput({ onColorChange }: ColorInputProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="type a color"
        onChange={(e) => onColorChange(e.target.value)}
      />
    </div>
  );
}

export default ColorInput;
