/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BadgesFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BadgesFilled = React.forwardRef<SVGSVGElement, BadgesFilledProps>(
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
      <path d="M16.486 12.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v4a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-4a1 1 0 0 0 -1.514 -.857z" />
  <path d="M16.486 3.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v4a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-4a1 1 0 0 0 -1.514 -.857z" />
    </svg>
  )
);
BadgesFilled.displayName = "BadgesFilled";
export const BadgesFilledMetadata = { 
  id: "badges_filled", 
  baseId: "badges", 
  variant: "filled", 
  name: "Badges", 
  category: "badge", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BadgesFilled;
