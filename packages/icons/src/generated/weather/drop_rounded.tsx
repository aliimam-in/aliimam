/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DropRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DropRounded = React.forwardRef<SVGSVGElement, DropRoundedProps>(
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
      <path d="M12.61 2.21C12.25 1.93 11.75 1.93 11.39 2.21C9.49004 3.66 3.88003 8.39 3.91003 13.9C3.91003 18.36 7.54004 22 12.01 22C16.48 22 20.11 18.37 20.11 13.91C20.12 8.48 14.5 3.67 12.61 2.21Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>
  )
);
DropRounded.displayName = "DropRounded";
export const DropRoundedMetadata = { 
  id: "drop_rounded", 
  baseId: "drop", 
  variant: "rounded", 
  name: "Drop", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DropRounded;
