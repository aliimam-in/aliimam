/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterYFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterYFilled = React.forwardRef<SVGSVGElement, CircleLetterYFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2.371 5.072a1 1 0 0 0 -1.3 .557l-1.071 2.678l-1.072 -2.678a1 1 0 0 0 -1.856 .742l1.928 4.823v2.806a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-2.809l1.928 -4.82a1 1 0 0 0 -.45 -1.25z" />
    </svg>
  )
);
CircleLetterYFilled.displayName = "CircleLetterYFilled";
export const CircleLetterYFilledMetadata = { 
  id: "circle-letter-y_filled", 
  baseId: "circle-letter-y", 
  variant: "filled", 
  name: "Circle Letter Y", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleLetterYFilled;
