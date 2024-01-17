import './Sidebar.css';

export const Sidebar = ({ side = 'left', sideWidth, contentMin = '50%', space = 'var(--s1)', noStretch, children, className }) => {
  const sidebarClass = `sidebar ${side === 'right' ? 'right' : ''} ${className || ''}`;
  const style = {
    '--side': side,
    '--sideWidth': sideWidth || 'auto',
    '--contentMin': contentMin,
    '--space': space,
    '--alignItems': noStretch ? 'flex-start' : 'stretch',
  };

  return (
    <div className={sidebarClass} style={style}>
      {side === 'right' ? children.reverse() : children}
    </div>
  );
};
