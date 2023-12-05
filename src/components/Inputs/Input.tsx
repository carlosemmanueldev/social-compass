import {ElementType, ChangeEvent} from 'react';

interface InputProps{
    placeholder?: string,
    value?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    icon: ElementType,
    error?: boolean,
    type?: string,
    errorMessage?: string
}

const Input = ({ type = "text", placeholder, value, onChange, icon: Icon, error, errorMessage }:InputProps) => {
  return (
    <div className="input-container">
      <div className={`input-default ${error ? "error" : ""} `}>
          <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
          />

          <Icon size={24} color="#fff"/>
      </div>
      {
        error && errorMessage != null ?
        <p className="input-container_error-message">
          {errorMessage}
        </p> : null
      }
    </div>
  )
}

export default Input;