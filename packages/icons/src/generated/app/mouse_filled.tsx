/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MouseFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MouseFilled = React.forwardRef<SVGSVGElement, MouseFilledProps>(
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
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.15 12.83L14.42 13.41C13.94 13.57 13.57 13.94 13.41 14.42L12.83 16.15C12.34 17.64 10.24 17.61 9.78 16.12L7.83 9.84C7.45 8.59 8.6 7.44 9.83 7.82L16.12 9.77C17.61 10.24 17.63 12.34 16.15 12.83Z" fill="currentColor"/>
    </svg>
  )
);
MouseFilled.displayName = "MouseFilled";
export const MouseFilledMetadata = { 
  id: "mouse_filled", 
  baseId: "mouse", 
  variant: "filled", 
  name: "Mouse", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MouseFilled;
