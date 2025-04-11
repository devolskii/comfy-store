const Input = ({ label, name, type, defaultValue }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <label className="fieldset-label capitalize text-xl">{label}</label>
      <input
        name={name}
        type={type}
        className="input text-xl"
        placeholder={defaultValue}
      />
    </div>
  );
};
export default Input;
