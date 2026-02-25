/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MicrochipProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Microchip = React.forwardRef<SVGSVGElement, MicrochipProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M10 12h4" />
  <path d="M10 17h4" />
  <path d="M10 7h4" />
  <path d="M18 12h2" />
  <path d="M18 18h2" />
  <path d="M18 6h2" />
  <path d="M4 12h2" />
  <path d="M4 18h2" />
  <path d="M4 6h2" />
  <rect x="6" y="2" width="12" height="20" rx="2" />
    </svg>
  )
);
Microchip.displayName = "Microchip";
export const MicrochipMetadata = { 
  id: "microchip", 
  baseId: "microchip", 
  variant: "default", 
  name: "Microchip", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Microchip;
