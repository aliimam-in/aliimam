/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MeteorFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MeteorFilled = React.forwardRef<SVGSVGElement, MeteorFilledProps>(
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
      <path d="M21.874 3.486l-4.174 7.514h3.3c.846 0 1.293 .973 .791 1.612l-.074 .085l-6.9 7.095a7.5 7.5 0 1 1 -10.21 -10.974l7.746 -6.58c.722 -.614 1.814 .028 1.628 .958l-.577 2.879l7.11 -3.95c.88 -.488 1.849 .481 1.36 1.36m-12.374 7.515a3.5 3.5 0 0 0 -3.495 3.308l-.005 .192a3.5 3.5 0 1 0 3.5 -3.5" />
    </svg>
  )
);
MeteorFilled.displayName = "MeteorFilled";
export const MeteorFilledMetadata = { 
  id: "meteor_filled", 
  baseId: "meteor", 
  variant: "filled", 
  name: "Meteor", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MeteorFilled;
