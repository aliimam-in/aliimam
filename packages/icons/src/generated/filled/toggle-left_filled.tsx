/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ToggleLeftFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ToggleLeftFilled = React.forwardRef<SVGSVGElement, ToggleLeftFilledProps>(
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
      <path d="M8 9a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" />
  <path d="M16 5a7 7 0 0 1 0 14h-8a7 7 0 0 1 0 -14zm0 2h-8a5 5 0 1 0 0 10h8a5 5 0 0 0 0 -10" />
    </svg>
  )
);
ToggleLeftFilled.displayName = "ToggleLeftFilled";
export const ToggleLeftFilledMetadata = { 
  id: "toggle-left_filled", 
  baseId: "toggle-left", 
  variant: "filled", 
  name: "Toggle Left", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ToggleLeftFilled;
