/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShieldProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Shield = React.forwardRef<SVGSVGElement, ShieldProps>(
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
);
Shield.displayName = "Shield";
export const ShieldMetadata = { 
  id: "shield", 
  baseId: "shield", 
  variant: "default", 
  name: "Shield", 
  category: "shield", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Shield;
