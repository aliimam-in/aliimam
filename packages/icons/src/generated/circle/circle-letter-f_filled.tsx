/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterFFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterFFilled = React.forwardRef<SVGSVGElement, CircleLetterFFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2 5h-4a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-3h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-2v-2h3a1 1 0 0 0 0 -2" />
    </svg>
  )
);
CircleLetterFFilled.displayName = "CircleLetterFFilled";
export const CircleLetterFFilledMetadata = { 
  id: "circle-letter-f_filled", 
  baseId: "circle-letter-f", 
  variant: "filled", 
  name: "Circle Letter F", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleLetterFFilled;
