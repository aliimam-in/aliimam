/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DiameterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Diameter = React.forwardRef<SVGSVGElement, DiameterProps>(
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
      <circle cx="19" cy="19" r="2" />
  <circle cx="5" cy="5" r="2" />
  <path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
  <path d="m6.41 6.41 11.18 11.18" />
  <path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
    </svg>
  )
);
Diameter.displayName = "Diameter";
export const DiameterMetadata = { 
  id: "diameter", 
  baseId: "diameter", 
  variant: "default", 
  name: "Diameter", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Diameter;
