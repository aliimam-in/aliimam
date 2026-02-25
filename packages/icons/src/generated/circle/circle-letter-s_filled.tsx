/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterSFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterSFilled = React.forwardRef<SVGSVGElement, CircleLetterSFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m1 5h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2v2h-2a1 1 0 0 0 -2 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-2v-2h2l.007 .117a1 1 0 0 0 1.993 -.117a2 2 0 0 0 -2 -2" />
    </svg>
  )
);
CircleLetterSFilled.displayName = "CircleLetterSFilled";
export const CircleLetterSFilledMetadata = { 
  id: "circle-letter-s_filled", 
  baseId: "circle-letter-s", 
  variant: "filled", 
  name: "Circle Letter S", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleLetterSFilled;
