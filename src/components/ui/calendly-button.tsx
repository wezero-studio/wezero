"use client";

import React, { useEffect } from 'react';

interface CalendlyButtonProps {
  url: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({
  url,
  children,
  className = '',
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    
    // Open Calendly link in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
};

export default CalendlyButton; 