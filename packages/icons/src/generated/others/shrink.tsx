/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShrinkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Shrink = React.forwardRef<SVGSVGElement, ShrinkProps>(
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
      <path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
  <path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
  <path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
  <path d="M9 4.2V9m0 0H4.2M9 9 3 3" />
    </svg>
  )
);
Shrink.displayName = "Shrink";
export const ShrinkMetadata = { 
  id: "shrink", 
  baseId: "shrink", 
  variant: "default", 
  name: "Shrink", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Shrink;
