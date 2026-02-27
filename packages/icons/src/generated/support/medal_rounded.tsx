/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MedalRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MedalRounded = React.forwardRef<SVGSVGElement, MedalRoundedProps>(
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
      <path d="M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.51999 13.52L7.51001 20.9C7.51001 21.8 8.14001 22.24 8.92001 21.87L11.6 20.6C11.82 20.49 12.19 20.49 12.41 20.6L15.1 21.87C15.87 22.23 16.51 21.8 16.51 20.9V13.34"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MedalRounded.displayName = "MedalRounded";
export const MedalRoundedMetadata = { 
  id: "medal_rounded", 
  baseId: "medal", 
  variant: "rounded", 
  name: "Medal", 
  category: "support", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MedalRounded;
