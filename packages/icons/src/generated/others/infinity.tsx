/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface InfinityProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Infinity = React.forwardRef<SVGSVGElement, InfinityProps>(
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
      <path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" />
    </svg>
  )
);
Infinity.displayName = "Infinity";
export const InfinityMetadata = { 
  id: "infinity", 
  baseId: "infinity", 
  variant: "default", 
  name: "Infinity", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Infinity;
