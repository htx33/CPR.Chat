import React from 'react';

const Goniometer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Base circle */}
      <circle cx="12" cy="12" r="10" />
      {/* Degree marks */}
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      <path d="M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      {/* Pointer arm */}
      <path d="M12 12L18 6" strokeWidth="2.5" />
      {/* Center point */}
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
};

export default Goniometer;
