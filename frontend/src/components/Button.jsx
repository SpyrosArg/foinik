const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = 'px-6 py-3 rounded-[14px] font-semibold transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed text-base';
  
  const variants = {
    primary: `
      bg-foinik-green 
      text-foinik-text-on-accent 
      font-bold
      border-none
      hover:bg-foinik-green-hover 
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    secondary: `
      bg-transparent 
      border-[1.5px] 
      border-foinik-green 
      text-foinik-green 
      hover:bg-foinik-accent-muted 
      hover:border-foinik-green-hover
    `,
    ghost: `
      bg-transparent 
      text-foinik-text-dimmed 
      border-none
      hover:bg-white/5 
      hover:text-foinik-text-secondary
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={
        variant === 'primary'
          ? {
              boxShadow: '0 4px 12px rgba(125, 255, 143, 0.25)',
              fontSize: '16px',
              fontWeight: 700,
              padding: '16px 32px',
            }
          : {}
      }
      onMouseEnter={(e) => {
        if (variant === 'primary' && !disabled) {
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(125, 255, 143, 0.35)';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary' && !disabled) {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(125, 255, 143, 0.25)';
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
