/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShieldRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ShieldRounded = React.forwardRef<SVGSVGElement, ShieldRoundedProps>(
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
      <path d="M10.49 2.23L5.50003 4.11C4.35003 4.54 3.41003 5.9 3.41003 7.12V14.55C3.41003 15.73 4.19003 17.28 5.14003 17.99L9.44003 21.2C10.85 22.26 13.17 22.26 14.58 21.2L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12C20.61 5.89 19.67 4.53 18.52 4.1L13.53 2.23C12.68 1.92 11.32 1.92 10.49 2.23Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ShieldRounded.displayName = "ShieldRounded";
export const ShieldRoundedMetadata = { 
  id: "shield_rounded", 
  baseId: "shield", 
  variant: "rounded", 
  name: "Shield", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ShieldRounded;
