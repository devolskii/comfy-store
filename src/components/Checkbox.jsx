const Checkbox = ({ label, name, defaultValue, size }) => {
  return (
    <div>
      <fieldset className="fieldset flex flex-col items-center">
        <label className="fieldset-label text-sm capitalize">{label}</label>
        <input
          name={name}
          type="checkbox"
          defaultChecked={defaultValue}
          className={`checkbox ${size}`}
        />
      </fieldset>
    </div>
  );
};
export default Checkbox;
