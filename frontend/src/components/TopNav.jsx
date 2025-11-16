import { Search, Bell, User } from 'lucide-react';

const TopNav = ({ title = 'Dashboard' }) => {
  return (
    <header 
      className="sticky top-0 z-30"
      style={{
        height: '70px',
        background: 'transparent',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        padding: '20px 24px',
        borderBottom: 'none',
      }}
    >
      <div className="flex items-center justify-between h-full">
        <h1 
          className="font-semibold truncate"
          style={{
            fontSize: '20px',
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
          {title}
        </h1>
        
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search */}
          <div 
            className="hidden md:flex items-center gap-2 rounded-xl"
            style={{
              padding: '8px 12px',
              background: 'rgba(20, 31, 26, 0.4)',
              border: '1px solid rgba(125, 255, 143, 0.15)',
            }}
          >
            <Search className="w-4 h-4" style={{ color: '#a8b3ae' }} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-foinik-text placeholder-foinik-text-dimmed focus:outline-none"
              style={{
                width: '256px',
                fontSize: '15px',
              }}
            />
          </div>
          
          {/* Mobile Search Button */}
          <button 
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{
              transition: 'all 150ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <Search className="w-5 h-5" style={{ color: '#a8b3ae' }} />
          </button>

          {/* Notifications */}
          <button 
            className="relative p-2 rounded-lg transition-colors"
            style={{
              transition: 'all 150ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <Bell className="w-5 h-5" style={{ color: '#a8b3ae' }} />
            <span 
              className="absolute top-1 right-1 rounded-full"
              style={{
                width: '8px',
                height: '8px',
                background: '#ff5757',
              }}
            />
          </button>

          {/* User Avatar */}
          <button 
            className="flex items-center gap-2 p-2 rounded-lg transition-colors"
            style={{
              transition: 'all 150ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div 
              className="rounded-full flex items-center justify-center"
              style={{
                width: '32px',
                height: '32px',
                background: 'rgba(125, 255, 143, 0.15)',
              }}
            >
              <User className="w-4 h-4" style={{ color: '#7dff8f' }} />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
