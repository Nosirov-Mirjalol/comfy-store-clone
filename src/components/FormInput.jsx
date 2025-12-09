const FormInput = ({type,defaultValue,label,size,name}) => {
  return (
    <fieldset className="fieldset py-3">
      <legend className="fieldset-legend">{label}</legend>
      <input type={type} name={name} className={`input  rounded-lg ${size}`} defaultValue={defaultValue} />
    </fieldset>
  );
};

export default FormInput;
