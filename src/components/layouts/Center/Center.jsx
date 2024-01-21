import './Center.css';

export const Center = ({children, className}) => {
  return (
    <div className={`center ${className || ''}`}>
      {children}
    </div>
  )
}