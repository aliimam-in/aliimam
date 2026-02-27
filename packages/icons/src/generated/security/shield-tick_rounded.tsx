/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShieldTickRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ShieldTickRounded = React.forwardRef<SVGSVGElement, ShieldTickRoundedProps>(
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
      <path d="M10.49 2.23L5.50003 4.11C4.35003 4.54 3.41003 5.9 3.41003 7.12V14.55C3.41003 15.73 4.19003 17.28 5.14003 17.99L9.44003 21.2C10.85 22.26 13.17 22.26 14.58 21.2L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12C20.61 5.89 19.67 4.53 18.52 4.1L13.53 2.23C12.68 1.92 11.32 1.92 10.49 2.23Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.05005 11.87L10.66 13.48L14.96 9.17999" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ShieldTickRounded.displayName = "ShieldTickRounded";
export const ShieldTickRoundedMetadata = { 
  id: "shield-tick_rounded", 
  baseId: "shield-tick", 
  variant: "rounded", 
  name: "Shield Tick", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ShieldTickRounded;
