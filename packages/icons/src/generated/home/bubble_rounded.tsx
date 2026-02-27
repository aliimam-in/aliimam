/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BubbleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BubbleRounded = React.forwardRef<SVGSVGElement, BubbleRoundedProps>(
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
      <path d="M15.59 12.26C18.4232 12.26 20.72 9.96323 20.72 7.13C20.72 4.29678 18.4232 2 15.59 2C12.7568 2 10.46 4.29678 10.46 7.13C10.46 9.96323 12.7568 12.26 15.59 12.26Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M6.35999 19.44C8.06102 19.44 9.44 18.0611 9.44 16.36C9.44 14.659 8.06102 13.28 6.35999 13.28C4.65895 13.28 3.28 14.659 3.28 16.36C3.28 18.0611 4.65895 19.44 6.35999 19.44Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M16.62 22C18.0338 22 19.18 20.8539 19.18 19.44C19.18 18.0262 18.0338 16.88 16.62 16.88C15.2061 16.88 14.06 18.0262 14.06 19.44C14.06 20.8539 15.2061 22 16.62 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>
  )
);
BubbleRounded.displayName = "BubbleRounded";
export const BubbleRoundedMetadata = { 
  id: "bubble_rounded", 
  baseId: "bubble", 
  variant: "rounded", 
  name: "Bubble", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BubbleRounded;
