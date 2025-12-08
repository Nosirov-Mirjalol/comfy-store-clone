const FormCheckbox = ({size, defaultValue,name,label}) => {
  return (
    <div className="form-control flex flex-col items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <input type="checkbox" name={name} defaultChecked={defaultValue} className={`checkbox checkbox-primary ${size}`} />
      </label>
    </div>
  )
}

export default FormCheckbox
