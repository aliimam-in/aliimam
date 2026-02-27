/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShieldSearchRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ShieldSearchRounded = React.forwardRef<SVGSVGElement, ShieldSearchRoundedProps>(
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
      <path d="M20.59 10.55V7.12C20.59 5.89 19.65 4.53 18.5 4.1L13.51 2.23C12.68 1.92 11.32 1.92 10.49 2.23L5.50003 4.11C4.35003 4.54 3.41003 5.9 3.41003 7.12V14.55C3.41003 15.73 4.19003 17.28 5.14003 17.99L9.44003 21.2C10.14 21.74 11.07 22 12 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.9955 21H21.0045" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ShieldSearchRounded.displayName = "ShieldSearchRounded";
export const ShieldSearchRoundedMetadata = { 
  id: "shield-search_rounded", 
  baseId: "shield-search", 
  variant: "rounded", 
  name: "Shield Search", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ShieldSearchRounded;
