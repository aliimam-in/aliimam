/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PacmanFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PacmanFilled = React.forwardRef<SVGSVGElement, PacmanFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M13.557 2.015a10 10 0 0 1 7.257 3.744a1 1 0 0 1 -.074 1.331l-4.912 4.91l4.912 4.91a1 1 0 0 1 .074 1.332a10 10 0 1 1 -15.112 -13.078l.235 -.242l.07 -.063a9.98 9.98 0 0 1 7.55 -2.844m-1.057 3.485c-1.02 0 -1.86 .762 -1.982 1.748l-.013 .15a1 1 0 0 0 -.005 .102a2 2 0 1 0 2 -2" />
    </svg>
  )
);
PacmanFilled.displayName = "PacmanFilled";
export const PacmanFilledMetadata = { 
  id: "pacman_filled", 
  baseId: "pacman", 
  variant: "filled", 
  name: "Pacman", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PacmanFilled;
