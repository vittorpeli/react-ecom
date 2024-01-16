
export const Button = ({ variant, exception, children, onClick }) => {
  const getStyles = () => {
    // Default styles
    let styles = {
      backgroundColor: 'blue',
      color: 'white',
      border: 'none',
      padding: '8px 12px',
      cursor: 'pointer',
      textDecoration: 'none',
    };

    // Variant-specific styles
    if (variant === 'ghost') {
      styles.backgroundColor = 'transparent';
      styles.border = '1px solid white';
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