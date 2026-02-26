/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BadgeSwissFrancProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BadgeSwissFranc = React.forwardRef<SVGSVGElement, BadgeSwissFrancProps>(
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
  <path d="M11 17V8h4" />
  <path d="M11 12h3" />
  <path d="M9 16h4" />
    </svg>
  )
);
BadgeSwissFranc.displayName = "BadgeSwissFranc";
export const BadgeSwissFrancMetadata = { 
  id: "badge-swiss-franc", 
  baseId: "badge-swiss-franc", 
  variant: "default", 
  name: "Badge Swiss Franc", 
  category: "badge", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BadgeSwissFranc;
