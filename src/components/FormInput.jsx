const FormInput = ({type,defaultValue,label}) => {
  return (
    <fieldset className="fieldset py-3">
      <legend className="fieldset-legend">{label}</legend>
      <input type={type} className="input input-primary" defaultValue={defaultValue} />
    </fieldset>
  );
};

export default FormInput;
