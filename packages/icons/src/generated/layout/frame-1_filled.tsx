/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Frame1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Frame1Filled = React.forwardRef<SVGSVGElement, Frame1FilledProps>(
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
      <path d="M8.02 4.62012H6.98C5.39 4.62012 4.75 5.22012 4.75 6.74012V18.6201H10.25V6.74012C10.24 5.22012 9.6 4.62012 8.02 4.62012Z" fill="currentColor"/>
<path d="M16.52 9.62012H15.48C13.89 9.62012 13.25 10.2301 13.25 11.7401V18.6201H18.75V11.7401C18.75 10.2301 18.1 9.62012 16.52 9.62012Z" fill="currentColor"/>
<path d="M2.75 17.8799H21.25C21.66 17.8799 22 18.2199 22 18.6299C22 19.0399 21.66 19.3799 21.25 19.3799H2.75C2.34 19.3799 2 19.0399 2 18.6199C2 18.1999 2.34 17.8799 2.75 17.8799Z" fill="currentColor"/>
    </svg>
  )
);
Frame1Filled.displayName = "Frame1Filled";
export const Frame1FilledMetadata = { 
  id: "frame-1_filled", 
  baseId: "frame-1", 
  variant: "filled", 
  name: "Frame 1", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Frame1Filled;
