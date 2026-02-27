/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ToggleOffFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ToggleOffFilled = React.forwardRef<SVGSVGElement, ToggleOffFilledProps>(
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
      <path d="M16.65 3.86011H7.35C3.25 3.86011 2 5.11011 2 9.21011V14.7901C2 18.8901 3.25 20.1401 7.35 20.1401H16.65C20.75 20.1401 22 18.8901 22 14.7901V9.21011C22 5.11011 20.75 3.86011 16.65 3.86011ZM14.09 13.1201C14.09 15.3701 13.04 16.4201 10.79 16.4201H8.56C6.31 16.4201 5.26 15.3701 5.26 13.1201V10.8901C5.26 8.64011 6.31 7.59011 8.56 7.59011H10.79C13.04 7.59011 14.09 8.64011 14.09 10.8901V13.1201Z" fill="currentColor"/>
    </svg>
  )
);
ToggleOffFilled.displayName = "ToggleOffFilled";
export const ToggleOffFilledMetadata = { 
  id: "toggle-off_filled", 
  baseId: "toggle-off", 
  variant: "filled", 
  name: "Toggle Off", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ToggleOffFilled;
