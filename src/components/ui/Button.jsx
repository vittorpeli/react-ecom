
export const Button = ({ variant, className, children, onClick, href }) => {
  const btnClass = `${className} || ''`;

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
      background: '#3b82f6',
      color: '#eff6ff',
      border: '1px solid rgba(255, 255, 255, 0.13)',
      borderRadius: '4px',
      cursor: 'pointer',
      textDecoration: 'none',
    };

    // Variant-specific styles
    if (variant === 'ghost') {
      styles.backgroundColor = 'transparent';
      styles.color = '#3b82f6';
      styles.border = '1px solid #3b82f6';
    } else if (variant === 'link') {
      styles.backgroundColor = 'transparent';
      styles.border = 'none';
      styles.color = '#3b82f6';
      styles.textDecoration = 'underline';
    }

    return styles;
  };

  const renderButton = () => {
    if(href) {
      return (
        <a className={btnClass} href={href} style={{ ...getStyles(), transition: 'background 200ms ease-in 0s' }}>
          {children}
        </a>
      );
    }else {
      return (
      <button className={btnClass} style={{...getStyles(), transition: '20ms ease-in 0s'}} onClick={onClick}>
        {children}
      </button>
      );
    }
  };
  return renderButton();
};