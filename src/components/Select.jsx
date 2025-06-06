const Select = ({ label, name, list, defaultValue, size }) => {
  return (
    <div className="">
      <fieldset className="fieldset">
        <label className="fieldset-label text-sm">{label}</label>
        <select
          name={name}
          defaultValue={defaultValue}
          className={`select ${size}`}
        >
          {list.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </fieldset>
    </div>
  );
};
export default Select;
