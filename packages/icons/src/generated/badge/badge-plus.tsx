/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BadgePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BadgePlus = React.forwardRef<SVGSVGElement, BadgePlusProps>(
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
  <line x1="12" x2="12" y1="8" y2="16" />
  <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  )
);
BadgePlus.displayName = "BadgePlus";
export const BadgePlusMetadata = { 
  id: "badge-plus", 
  baseId: "badge-plus", 
  variant: "default", 
  name: "Badge Plus", 
  category: "badge", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BadgePlus;
