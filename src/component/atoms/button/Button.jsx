import './button.css'
export const Button = ({descripcion, type}) => {
  return (
    <button className='button' type={type}>{descripcion}</button>
  )
}
