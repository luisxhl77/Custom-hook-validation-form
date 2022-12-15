import { validate } from "../../hooks/FormValidationRules";
import useForm from "../../hooks/useForm";
import { Button } from "../atoms/button/Button";
import { Input } from "../molecules/input/Input";
import './form.css';

export const Form = () => {
    const { values, errors, handleChange, handleSubmit, } = useForm(login, validate);
    const alert = () => {
      alert("sesion iniciada");
    }
    function login() {
      console.log('todos los datos son correctos');
    }
    return (
        <div className="formulario">

            <form onSubmit={handleSubmit} noValidate>
                <Input autoComplete  = "off" 
                    className        = {`input-text ${errors.name && 'is-danger'}`} 
                    type             = "text" 
                    name             = "name" 
                    onChange         = {handleChange} 
                    value            = {values.name || ''} 
                    required         = {true}
                    descripcion      = "nombre:"
                    classNameError   = "input-error"
                    descripcionError = { errors.name }
                />
                <Input autoComplete  = "off" 
                    className        = {`input-text ${errors.surname && 'is-danger'}`} 
                    type             = "text" 
                    name             = "surname" 
                    onChange         = {handleChange} 
                    value            = {values.surname || ''} 
                    required         = {true}
                    descripcion      = "Apellido:"
                    classNameError   = "input-error"
                    descripcionError = { errors.surname }
                />
                <Input autoComplete  = "off" 
                    className        = {`input-text ${errors.numberPhone && 'is-danger'}`} 
                    type             = "text" 
                    name             = "numberPhone" 
                    onChange         = {handleChange} 
                    value            = {values.numberPhone || ''} 
                    required         = {true}
                    descripcion      = "Telefono:"
                    classNameError   = "input-error"
                    descripcionError = { errors.numberPhone }
                />
                <Input autoComplete  = "off" 
                    className        = {`input-text ${errors.email && 'is-danger'}`} 
                    type             = "email" 
                    name             = "email" 
                    onChange         = {handleChange} 
                    value            = {values.email || ''} 
                    required         = {true}
                    descripcion      = "Correo:"
                    classNameError   = "input-error"
                    descripcionError = { errors.email }
                />
                <Input autoComplete  = "off" 
                    className        = {`input-text ${errors.password && 'is-danger'}`} 
                    type             = "password" 
                    name             = "password" 
                    onChange         = {handleChange} 
                    value            = {values.password || ''} 
                    required         = {true}
                    descripcion      = "Contraseña:"
                    classNameError   = "input-error"
                    descripcionError = { errors.password }
                />
                <Button type="submit" descripcion="Registrar"/>
            </form>
            
        </div>
    )
}
