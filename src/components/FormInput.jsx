const FormInput = ({type,defaultValue,label,size}) => {
  return (
    <fieldset className="fieldset py-3">
      <legend className="fieldset-legend">{label}</legend>
      <input type={type} className={`input input-primary rounded-xl ${size}`} defaultValue={defaultValue} />
    </fieldset>
  );
};

export default FormInput;
