/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MouseCircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MouseCircleFilled = React.forwardRef<SVGSVGElement, MouseCircleFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M20.96 17.84L19.33 18.39C18.88 18.54 18.52 18.89 18.37 19.35L17.82 20.98C17.35 22.39 15.37 22.36 14.93 20.95L13.08 15C12.72 13.82 13.81 12.72 14.98 13.09L20.94 14.94C22.34 15.38 22.36 17.37 20.96 17.84Z" fill="currentColor"/>
<path d="M21 11.4999C21 11.9299 20.97 12.3599 20.92 12.7799C20.88 13.0799 20.57 13.2599 20.28 13.1699L15.43 11.6599C14.35 11.3299 13.2 11.6099 12.4 12.3999C11.6 13.1999 11.31 14.3699 11.65 15.4499L13.15 20.2799C13.24 20.5699 13.05 20.8799 12.75 20.9199C12.33 20.9699 11.92 20.9999 11.5 20.9999C6.16003 20.9999 1.86003 16.6099 2.00003 11.2299C2.14003 6.26991 6.27003 2.13991 11.23 1.99991C16.61 1.85991 21 6.15991 21 11.4999Z" fill="currentColor"/>
    </svg>
  )
);
MouseCircleFilled.displayName = "MouseCircleFilled";
export const MouseCircleFilledMetadata = { 
  id: "mouse-circle_filled", 
  baseId: "mouse-circle", 
  variant: "filled", 
  name: "Mouse Circle", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MouseCircleFilled;
