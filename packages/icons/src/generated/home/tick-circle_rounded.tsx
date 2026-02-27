/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TickCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TickCircleRounded = React.forwardRef<SVGSVGElement, TickCircleRoundedProps>(
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
      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.75 12L10.58 14.83L16.25 9.17"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TickCircleRounded.displayName = "TickCircleRounded";
export const TickCircleRoundedMetadata = { 
  id: "tick-circle_rounded", 
  baseId: "tick-circle", 
  variant: "rounded", 
  name: "Tick Circle", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TickCircleRounded;
