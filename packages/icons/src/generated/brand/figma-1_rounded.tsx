/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Figma1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Figma1Rounded = React.forwardRef<SVGSVGElement, Figma1RoundedProps>(
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
      <path d="M12 6H10C8.9 6 8 6.9 8 8C8 9.1 8.9 10 10 10H12V6Z"   strokeMiterlimit="10"/>
<path d="M12 10H10C8.9 10 8 10.9 8 12C8 13.1 8.9 14 10 14H12V10Z"   strokeMiterlimit="10"/>
<path d="M12 14H10C8.9 14 8 14.9 8 16C8 17.1 8.9 18 10 18C11.1 18 12 17.1 12 16V14Z"   strokeMiterlimit="10"/>
<path d="M12 6H14C15.1 6 16 6.9 16 8C16 9.1 15.1 10 14 10H12V6Z"   strokeMiterlimit="10"/>
<path d="M14 10C15.1 10 16 10.9 16 12C16 13.1 15.1 14 14 14C12.9 14 12 13.1 12 12C12 10.9 12.9 10 14 10Z"   strokeMiterlimit="10"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10"/>
    </svg>
  )
);
Figma1Rounded.displayName = "Figma1Rounded";
export const Figma1RoundedMetadata = { 
  id: "figma-1_rounded", 
  baseId: "figma-1", 
  variant: "rounded", 
  name: "Figma 1", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Figma1Rounded;
