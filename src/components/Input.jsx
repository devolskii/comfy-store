const Input = ({ label, name, type, boxSize, labelSize = "text-sm" }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <label className={`fieldset-label capitalize ${labelSize}`}>
        {label}
      </label>
      <input name={name} type={type} className={`input ${boxSize}`} />
    </div>
  );
};
export default Input;
