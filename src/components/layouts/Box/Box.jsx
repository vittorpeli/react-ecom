import './Box.css';

export const Box = ({ children, className, invert=false }) => {
  return (
    <div className={`box ${invert ? 'invert' : ''} 
    ${className || ''}`}>
      {children}
    </div>
  )
}