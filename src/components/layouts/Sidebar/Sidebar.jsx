import './Sidebar.css';

export const Sidebar = ({ 
  side = 'left', 
  sideWidth, 
  contentMin = '50%', 
  space = 'var(--s1)', 
  noStretch, 
  children, 
  className 
}) => {
  const sidebarClass = `sidebar ${className || ''}`;
  const styles = {
    '--sideWidth': sideWidth || 'auto',
    '--contentMin': contentMin,
    '--space': space === '0' ? '0px' : space,
  };

  return (
    <div className={`${sidebarClass} ${side === 'right' ? 'right' : ''} ${noStretch ? noStretch : ''}`} style={styles}>
      {side === 'right' ? children.reverse() : children}
    </div>
  );
};
