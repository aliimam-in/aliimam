/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FramerRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FramerRounded = React.forwardRef<SVGSVGElement, FramerRoundedProps>(
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
      <path d="M5 2L19 16H5V9H19V2H5Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V22L5 16H12Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
FramerRounded.displayName = "FramerRounded";
export const FramerRoundedMetadata = { 
  id: "framer_rounded", 
  baseId: "framer", 
  variant: "rounded", 
  name: "Framer", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FramerRounded;
