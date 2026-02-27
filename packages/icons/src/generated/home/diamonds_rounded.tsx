/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DiamondsRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DiamondsRounded = React.forwardRef<SVGSVGElement, DiamondsRoundedProps>(
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
      <path d="M16.29 2.14999H7.70002C6.00002 2.14999 5.25001 2.99999 4.79001 4.03999L2.23001 9.79999C1.77001 10.84 2.02001 12.39 2.79001 13.23L9.65001 20.77C10.95 22.19 13.07 22.19 14.36 20.77L21.21 13.22C21.98 12.37 22.23 10.83 21.76 9.78999L19.2 4.02999C18.74 2.99999 17.99 2.14999 16.29 2.14999Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 8H20.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DiamondsRounded.displayName = "DiamondsRounded";
export const DiamondsRoundedMetadata = { 
  id: "diamonds_rounded", 
  baseId: "diamonds", 
  variant: "rounded", 
  name: "Diamonds", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DiamondsRounded;
