/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Crown1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Crown1Rounded = React.forwardRef<SVGSVGElement, Crown1RoundedProps>(
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
      <path d="M16.7 18.98H7.3C6.88 18.98 6.41 18.65 6.27 18.25L2.13 6.67C1.54 5.01 2.23 4.5 3.65 5.52L7.55 8.31C8.2 8.76 8.94 8.53 9.22 7.8L10.98 3.11C11.54 1.61 12.47 1.61 13.03 3.11L14.79 7.8C15.07 8.53 15.81 8.76 16.45 8.31L20.11 5.7C21.67 4.58 22.42 5.15 21.78 6.96L17.74 18.27C17.59 18.65 17.12 18.98 16.7 18.98Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 22H17.5"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 14H14.5"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Crown1Rounded.displayName = "Crown1Rounded";
export const Crown1RoundedMetadata = { 
  id: "crown-1_rounded", 
  baseId: "crown-1", 
  variant: "rounded", 
  name: "Crown 1", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Crown1Rounded;
