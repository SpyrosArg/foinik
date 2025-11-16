const Card = ({ children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        glass rounded-[20px]
        transition-all duration-200 ease-out
        ${onClick ? 'cursor-pointer hover:border-foinik-border-medium' : ''}
        ${className}
      `}
      style={{
        padding: '24px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
