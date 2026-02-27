/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RulerPenRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RulerPenRounded = React.forwardRef<SVGSVGElement, RulerPenRoundedProps>(
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
      <path d="M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z"   strokeLinecap="round"/>
<path d="M11.47 6H16.47"   strokeLinecap="round"/>
<path d="M11.47 18H15.47"   strokeLinecap="round"/>
<path d="M11.47 13.95L16.47 14"   strokeLinecap="round"/>
<path d="M11.47 10H14.47"   strokeLinecap="round"/>
<path d="M5.49003 2C3.86003 2 2.53003 3.33 2.53003 4.95V17.91C2.53003 18.36 2.72003 19.04 2.95003 19.43L3.77003 20.79C4.71003 22.36 6.26003 22.36 7.20003 20.79L8.02003 19.43C8.25003 19.04 8.44003 18.36 8.44003 17.91V4.95C8.44003 3.33 7.11003 2 5.49003 2Z"   strokeLinecap="round"/>
<path d="M8.44003 7H2.53003"   strokeLinecap="round"/>
    </svg>
  )
);
RulerPenRounded.displayName = "RulerPenRounded";
export const RulerPenRoundedMetadata = { 
  id: "ruler-pen_rounded", 
  baseId: "ruler-pen", 
  variant: "rounded", 
  name: "Ruler Pen", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RulerPenRounded;
