/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EarthProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Earth = React.forwardRef<SVGSVGElement, EarthProps>(
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
      <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
  <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
  <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
  <circle cx="12" cy="12" r="10" />
    </svg>
  )
);
Earth.displayName = "Earth";
export const EarthMetadata = { 
  id: "earth", 
  baseId: "earth", 
  variant: "default", 
  name: "Earth", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Earth;
