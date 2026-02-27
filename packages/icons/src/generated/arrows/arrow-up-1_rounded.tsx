/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUp1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUp1Rounded = React.forwardRef<SVGSVGElement, ArrowUp1RoundedProps>(
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
      <path d="M19.9201 15.05L13.4001 8.53C12.6301 7.76 11.3701 7.76 10.6001 8.53L4.08008 15.05" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowUp1Rounded.displayName = "ArrowUp1Rounded";
export const ArrowUp1RoundedMetadata = { 
  id: "arrow-up-1_rounded", 
  baseId: "arrow-up-1", 
  variant: "rounded", 
  name: "Arrow Up 1", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUp1Rounded;
