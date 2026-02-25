/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BadgeFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BadgeFilled = React.forwardRef<SVGSVGElement, BadgeFilledProps>(
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
      <path d="M16.486 3.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v13a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-13a1 1 0 0 0 -1.514 -.857z" />
    </svg>
  )
);
BadgeFilled.displayName = "BadgeFilled";
export const BadgeFilledMetadata = { 
  id: "badge_filled", 
  baseId: "badge", 
  variant: "filled", 
  name: "Badge", 
  category: "badge", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BadgeFilled;
