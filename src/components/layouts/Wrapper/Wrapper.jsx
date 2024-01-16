/* eslint-disable react/prop-types */
import './Wrapper.css';

export const Wrapper = ({children, className}) => {
  return (
    <div className={`wrapper ${className || ''}`}>
      {children}
    </div>
  )
}