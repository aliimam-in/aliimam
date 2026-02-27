/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MouseCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MouseCircleRounded = React.forwardRef<SVGSVGElement, MouseCircleRoundedProps>(
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
      <path d="M20.96 17.84L19.33 18.39C18.88 18.54 18.52 18.89 18.37 19.35L17.82 20.98C17.35 22.39 15.37 22.36 14.93 20.95L13.08 15C12.72 13.82 13.81 12.72 14.98 13.09L20.94 14.94C22.34 15.38 22.36 17.37 20.96 17.84Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MouseCircleRounded.displayName = "MouseCircleRounded";
export const MouseCircleRoundedMetadata = { 
  id: "mouse-circle_rounded", 
  baseId: "mouse-circle", 
  variant: "rounded", 
  name: "Mouse Circle", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MouseCircleRounded;
