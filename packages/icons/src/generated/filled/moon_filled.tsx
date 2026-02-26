/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoonFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoonFilled = React.forwardRef<SVGSVGElement, MoonFilledProps>(
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
      <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
    </svg>
  )
);
MoonFilled.displayName = "MoonFilled";
export const MoonFilledMetadata = { 
  id: "moon_filled", 
  baseId: "moon", 
  variant: "filled", 
  name: "Moon", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoonFilled;
