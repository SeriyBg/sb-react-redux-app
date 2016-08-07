import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, value, placeholder, error}) => {
  let wrappedClass = 'form-group';
  if(error && error.length > 0){
    wrappedClass += ' has-error';
  }
  return (
    <div className={wrappedClass}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
