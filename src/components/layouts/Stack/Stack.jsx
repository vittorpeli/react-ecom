import './Stack.css';

export const Stack = ({ space = 1, fullWidth = false, children, className}) => {
  const stackClass = `stack ${className || ''}`;
  const style = { '--space': `${space}rem`};

  return (
    <div className={`${fullWidth ? 'fullWidth' : ''} ${stackClass}`} style={style}>
      {children}
    </div>
  )
}