import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ 
  value, 
  label, 
  change, 
  changeType = 'positive', 
  sparkline,
  icon: Icon,
  className = '' 
}) => {
  const isPositive = changeType === 'positive';
  const changeColor = isPositive ? '#7dff8f' : '#ff5757';
  const changeBg = isPositive ? 'rgba(125, 255, 143, 0.12)' : 'rgba(255, 87, 87, 0.12)';
  const ChangeIcon = isPositive ? TrendingUp : TrendingDown;

  // Split value into main and decimal parts if it contains a decimal
  const valueParts = String(value).split('.');
  const mainValue = valueParts[0];
  const decimalValue = valueParts[1] ? `.${valueParts[1]}` : '';

  return (
    <div 
      className={`
        glass rounded-[20px] p-8
        ${className}
      `}
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        {Icon && (
          <div 
            className="p-2 rounded-lg"
            style={{
              background: 'rgba(125, 255, 143, 0.08)',
            }}
          >
            <Icon className="w-5 h-5" style={{ color: '#7dff8f' }} />
          </div>
        )}
        {sparkline && (
          <div className="w-16 h-8 opacity-60">
            {sparkline}
          </div>
        )}
      </div>
      
      <div className="mb-2 flex items-baseline gap-1">
        <span 
          className="tabular-nums"
          style={{
            fontSize: '56px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
          }}
        >
          {mainValue}
        </span>
        {decimalValue && (
          <span 
            className="tabular-nums"
            style={{
              fontSize: '40px',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: '#6a7672',
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
            }}
          >
            {decimalValue}
          </span>
        )}
      </div>
      
      {change !== undefined && (
        <div 
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2"
          style={{
            background: changeBg,
            color: changeColor,
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          <ChangeIcon className="w-3.5 h-3.5" />
          <span>{change}</span>
        </div>
      )}
      
      <div 
        style={{
          fontSize: '17px',
          fontWeight: 500,
          color: '#6a7672',
          marginTop: '8px',
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default StatCard;
