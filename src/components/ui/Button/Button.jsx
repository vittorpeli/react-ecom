import './Button.css';

export const Button = ({ variant, className, children, onClick, href, type }) => {

  const getClassName = () => {
    let btnClass = `button ${className}`;
    // Variant-specific styles
    if (variant === 'ghost') {
      btnClass += '  button-ghost';
    } else if (variant === 'link') {
      btnClass += '  button-link';
    }

    return btnClass;
  };

  const renderButton = () => {
    if(href) {
      return (
        <a className={getClassName()} href={href} onClick={onClick}>
          {children}
        </a>
      );
    }else {
      return (
      <button type={type} className={getClassName()} onClick={onClick}>
        {children}
      </button>
      );
    }
  };
  return renderButton();
};