import './Grid.css';

export const Grid = ({ children, className}) => {
  return (
    <div className={`grid ${className || ''}`}>
      {children}
    </div>
  )
}