/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BadgeVoFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BadgeVoFilled = React.forwardRef<SVGSVGElement, BadgeVoFilledProps>(
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
      <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-3.5 4a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0v-3a2.5 2.5 0 0 0 -2.5 -2.5m-4.184 .051a1 1 0 0 0 -1.265 .633l-1.051 3.154l-1.051 -3.154a1 1 0 0 0 -1.898 .632l2 6c.304 .912 1.594 .912 1.898 0l2 -6a1 1 0 0 0 -.633 -1.265m4.184 1.949a.5 .5 0 0 1 .5 .5v3a.5 .5 0 1 1 -1 0v-3a.5 .5 0 0 1 .5 -.5" />
    </svg>
  )
);
BadgeVoFilled.displayName = "BadgeVoFilled";
export const BadgeVoFilledMetadata = { 
  id: "badge-vo_filled", 
  baseId: "badge-vo", 
  variant: "filled", 
  name: "Badge Vo", 
  category: "badge", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BadgeVoFilled;
