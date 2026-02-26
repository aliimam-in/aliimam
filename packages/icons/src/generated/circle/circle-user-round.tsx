/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleUserRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleUserRound = React.forwardRef<SVGSVGElement, CircleUserRoundProps>(
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
      <path d="M18 20a6 6 0 0 0-12 0" />
  <circle cx="12" cy="10" r="4" />
  <circle cx="12" cy="12" r="10" />
    </svg>
  )
);
CircleUserRound.displayName = "CircleUserRound";
export const CircleUserRoundMetadata = { 
  id: "circle-user-round", 
  baseId: "circle-user-round", 
  variant: "default", 
  name: "Circle User Round", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleUserRound;
