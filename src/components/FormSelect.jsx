const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <select defaultValue={defaultValue} className={`select ${size}`} >
        {list.map(item=>{
          return <option value={name} key={name} >{item}</option>
        })}
      </select>
    </fieldset>
  );
};

export default FormSelect;
