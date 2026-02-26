/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleCaretUpFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleCaretUpFilled = React.forwardRef<SVGSVGElement, CircleCaretUpFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-4.293 5.953a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 .707 1.707h6c.217 0 .433 -.07 .613 -.21l.094 -.083a1 1 0 0 0 0 -1.414z" />
    </svg>
  )
);
CircleCaretUpFilled.displayName = "CircleCaretUpFilled";
export const CircleCaretUpFilledMetadata = { 
  id: "circle-caret-up_filled", 
  baseId: "circle-caret-up", 
  variant: "filled", 
  name: "Circle Caret Up", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleCaretUpFilled;
