/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleSlashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleSlash = React.forwardRef<SVGSVGElement, CircleSlashProps>(
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
      <circle cx="12" cy="12" r="10" />
  <line x1="9" x2="15" y1="15" y2="9" />
    </svg>
  )
);
CircleSlash.displayName = "CircleSlash";
export const CircleSlashMetadata = { 
  id: "circle-slash", 
  baseId: "circle-slash", 
  variant: "default", 
  name: "Circle Slash", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleSlash;
