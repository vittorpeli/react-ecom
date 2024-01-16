
export const Button = ({ variant, children, onClick }) => {
  const getStyles = () => {
    // Default styles
    let styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      height: '32px',
      padding: '8px 12px',
      fontSize: '14px',
      lineHeight: '1.2',
      fontWeight: '500',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'background 20ms ease-in 0s'
    };

    // Variant-specific styles
    if (variant === 'ghost') {
      styles.backgroundColor = 'transparent';
      styles.border = '1px solid rgba(255, 255, 255, 0.13)';
    } else if (variant === 'link') {
      styles.backgroundColor = 'transparent';
      styles.textDecoration = 'underline';
    }

    return styles;
  };

  return (
    <button style={getStyles()} onClick={onClick}>
      {children}
    </button>
  );
};