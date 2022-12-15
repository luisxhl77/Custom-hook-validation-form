import './input.css';

export const Input = ({ autoComplete, className, type, name, onChange, value, required, descripcion, classNameError, descripcionError}) => {
    return (
        <div className="input">
            <label htmlFor={name} className="input-label">{descripcion}</label>
            <input 
                autoComplete = { autoComplete }
                className    = { className } 
                type         = { type }
                name         = { name } 
                id           = { name } 
                onChange     = { onChange } 
                value        = { value } 
                required     = { required }
            />
            {descripcionError && (
                <p className={classNameError} >{ descripcionError } </p>
            )}
        </div>
    )
}
