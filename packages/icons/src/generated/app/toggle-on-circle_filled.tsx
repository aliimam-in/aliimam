/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ToggleOnCircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ToggleOnCircleFilled = React.forwardRef<SVGSVGElement, ToggleOnCircleFilledProps>(
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
      <path d="M13.86 3.86011H10.14C5.65 3.86011 2 7.51011 2 12.0001C2 16.4901 5.65 20.1401 10.14 20.1401H13.86C18.35 20.1401 22 16.4901 22 12.0001C22 7.51011 18.35 3.86011 13.86 3.86011ZM13.86 16.4201C11.42 16.4201 9.44 14.4401 9.44 12.0001C9.44 9.56011 11.42 7.58011 13.86 7.58011C16.3 7.58011 18.28 9.56011 18.28 12.0001C18.28 14.4401 16.3 16.4201 13.86 16.4201Z" fill="currentColor"/>
    </svg>
  )
);
ToggleOnCircleFilled.displayName = "ToggleOnCircleFilled";
export const ToggleOnCircleFilledMetadata = { 
  id: "toggle-on-circle_filled", 
  baseId: "toggle-on-circle", 
  variant: "filled", 
  name: "Toggle On Circle", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ToggleOnCircleFilled;
