/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterLFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterLFilled = React.forwardRef<SVGSVGElement, CircleLetterLFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m-2 5a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-3v-7a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
CircleLetterLFilled.displayName = "CircleLetterLFilled";
export const CircleLetterLFilledMetadata = { 
  id: "circle-letter-l_filled", 
  baseId: "circle-letter-l", 
  variant: "filled", 
  name: "Circle Letter L", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleLetterLFilled;
