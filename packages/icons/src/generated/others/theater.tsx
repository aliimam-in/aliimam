/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TheaterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Theater = React.forwardRef<SVGSVGElement, TheaterProps>(
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
      <path d="M2 10s3-3 3-8" />
  <path d="M22 10s-3-3-3-8" />
  <path d="M10 2c0 4.4-3.6 8-8 8" />
  <path d="M14 2c0 4.4 3.6 8 8 8" />
  <path d="M2 10s2 2 2 5" />
  <path d="M22 10s-2 2-2 5" />
  <path d="M8 15h8" />
  <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
  <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
    </svg>
  )
);
Theater.displayName = "Theater";
export const TheaterMetadata = { 
  id: "theater", 
  baseId: "theater", 
  variant: "default", 
  name: "Theater", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Theater;
