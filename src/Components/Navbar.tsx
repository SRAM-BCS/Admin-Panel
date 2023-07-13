import React from 'react';

const Navbar: React.FC = () => {
  const navStyle: React.CSSProperties = {
background: 'linear-gradient(to right, #005aa7, #fffde4)'

  };

  const linkStyle: React.CSSProperties = {
    color: 'white',
    padding: '0.75rem',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    marginLeft: '0.5rem',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <a href="#" style={linkStyle}>Logo</a>
          </div>
          <div className="flex">
            <a href="#" style={linkStyle}>Student</a>
            <a href="#" style={linkStyle}>Faculty</a>
            <a href="#" style={linkStyle}>Classroom</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
