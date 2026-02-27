/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MouseSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MouseSquareRounded = React.forwardRef<SVGSVGElement, MouseSquareRoundedProps>(
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
      <path d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H12"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.96 17.84L19.33 18.39C18.88 18.54 18.52 18.89 18.37 19.35L17.82 20.98C17.35 22.39 15.37 22.36 14.93 20.95L13.08 15C12.72 13.82 13.81 12.72 14.98 13.09L20.94 14.94C22.34 15.38 22.36 17.37 20.96 17.84Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MouseSquareRounded.displayName = "MouseSquareRounded";
export const MouseSquareRoundedMetadata = { 
  id: "mouse-square_rounded", 
  baseId: "mouse-square", 
  variant: "rounded", 
  name: "Mouse Square", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MouseSquareRounded;
