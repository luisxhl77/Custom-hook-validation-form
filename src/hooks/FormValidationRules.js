
export const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email requerido';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email invalido';
  }

  if (!values.name) {
    errors.name = 'Nombre requerido';
  } else if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(values.name)) {
    errors.name = 'Nombre invalido';
  }

  if (!values.surname) {
    errors.surname = 'Apellido requerido';
  } else if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(values.surname)) {
    errors.surname = 'Apellido invalido';
  }

  if (!values.numberPhone) {
    errors.numberPhone = 'Telefono requerido';
  } else if (!/^[0-9]+$/.test(values.numberPhone)) {
    errors.numberPhone = 'Telefono invalido';
  }

  if (!values.password) {
    errors.password = 'contraseña requerida';
  } else if (!/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/.test(values.password)) {
    errors.password = 'Contraseña debe contener mayusculas, minusculas, numeros y signos';
  }

  return errors;
};
