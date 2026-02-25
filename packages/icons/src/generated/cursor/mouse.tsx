/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MouseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mouse = React.forwardRef<SVGSVGElement, MouseProps>(
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
      <rect x="5" y="2" width="14" height="20" rx="7" />
  <path d="M12 6v4" />
    </svg>
  )
);
Mouse.displayName = "Mouse";
export const MouseMetadata = { 
  id: "mouse", 
  baseId: "mouse", 
  variant: "default", 
  name: "Mouse", 
  category: "cursor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Mouse;
