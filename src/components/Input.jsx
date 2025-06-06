const Input = ({ label, name, type, defaultValue, boxSize, labelSize }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <label className={`fieldset-label capitalize ${labelSize}`}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        className={`input ${boxSize}`}
        placeholder={defaultValue}
      />
    </div>
  );
};
export default Input;
