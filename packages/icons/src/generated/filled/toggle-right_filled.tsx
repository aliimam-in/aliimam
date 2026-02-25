/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ToggleRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ToggleRightFilled = React.forwardRef<SVGSVGElement, ToggleRightFilledProps>(
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
      <path d="M16 9a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" />
  <path d="M16 5a7 7 0 0 1 0 14h-8a7 7 0 0 1 0 -14zm0 2h-8a5 5 0 1 0 0 10h8a5 5 0 0 0 0 -10" />
    </svg>
  )
);
ToggleRightFilled.displayName = "ToggleRightFilled";
export const ToggleRightFilledMetadata = { 
  id: "toggle-right_filled", 
  baseId: "toggle-right", 
  variant: "filled", 
  name: "Toggle Right", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ToggleRightFilled;
