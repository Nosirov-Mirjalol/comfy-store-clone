const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <select defaultValue={defaultValue} className={`select ${size}`} >
        {list.map((item,inx)=>{
          return <option value={name} key={inx} >{item}</option>
        })}
      </select>
    </fieldset>
  );
};

export default FormSelect;
