/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TurtleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Turtle = React.forwardRef<SVGSVGElement, TurtleProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
  <path d="M4.82 7.9 8 10" />
  <path d="M15.18 7.9 12 10" />
  <path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
    </svg>
  )
);
Turtle.displayName = "Turtle";
export const TurtleMetadata = { 
  id: "turtle", 
  baseId: "turtle", 
  variant: "default", 
  name: "Turtle", 
  category: "animal", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Turtle;
