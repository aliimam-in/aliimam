/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HourglassFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HourglassFilled = React.forwardRef<SVGSVGElement, HourglassFilledProps>(
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
      <path d="M17 2a2 2 0 0 1 1.995 1.85l.005 .15v2a6.996 6.996 0 0 1 -3.393 6a6.994 6.994 0 0 1 3.388 5.728l.005 .272v2a2 2 0 0 1 -1.85 1.995l-.15 .005h-10a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-2a6.996 6.996 0 0 1 3.393 -6a6.994 6.994 0 0 1 -3.388 -5.728l-.005 -.272v-2a2 2 0 0 1 1.85 -1.995l.15 -.005h10z" />
    </svg>
  )
);
HourglassFilled.displayName = "HourglassFilled";
export const HourglassFilledMetadata = { 
  id: "hourglass_filled", 
  baseId: "hourglass", 
  variant: "filled", 
  name: "Hourglass", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HourglassFilled;
