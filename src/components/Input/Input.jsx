import './Input.css';
import clsx from 'clsx';
function Input(props) {
     const { placeholder, required, type, className, ...rest } = props;
    const classes = clsx({
        "input": true,
    },className)
    // Implementar entrada
    return (
        <label className="label">
            {placeholder}
            {required && <span className="input-required">*</span>}
            <div>
            <input 
                type={type ?? "text"} 
                placeholder={placeholder}
                required = {required ?? false} 
                className={classes}
                {...rest}
            />
            </div>
        </label>
    );
  }
export default Input;
