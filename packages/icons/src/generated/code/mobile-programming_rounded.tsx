/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MobileProgrammingRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MobileProgrammingRounded = React.forwardRef<SVGSVGElement, MobileProgrammingRoundedProps>(
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
      <path d="M8.92999 2L8.95999 3.53003C8.97999 4.34003 9.64999 5 10.46 5H13.48C14.31 5 14.98 4.32 14.98 3.5V2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17L15 19L17 21"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 17L22 19L20 21"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7V14"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MobileProgrammingRounded.displayName = "MobileProgrammingRounded";
export const MobileProgrammingRoundedMetadata = { 
  id: "mobile-programming_rounded", 
  baseId: "mobile-programming", 
  variant: "rounded", 
  name: "Mobile Programming", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MobileProgrammingRounded;
