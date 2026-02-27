/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Mask1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mask1Rounded = React.forwardRef<SVGSVGElement, Mask1RoundedProps>(
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 12C17 14.76 14.76 17 12 17V7C14.76 7 17 9.24 17 12Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V2"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Mask1Rounded.displayName = "Mask1Rounded";
export const Mask1RoundedMetadata = { 
  id: "mask-1_rounded", 
  baseId: "mask-1", 
  variant: "rounded", 
  name: "Mask 1", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Mask1Rounded;
