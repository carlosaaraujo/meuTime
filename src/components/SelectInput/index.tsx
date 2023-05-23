interface SelectInputProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const SelectInput = ({
  label,
  value,
  options,
  onChange,
  disabled,
  dependentValue,
}: SelectInputProps & { disabled?: boolean; dependentValue?: string }) => {
  return (
    <div>
      <label>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        <option value="">Selecione</option>
        {options.map((option, index: number) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
