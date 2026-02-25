/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowDown = React.forwardRef<SVGSVGElement, ArrowDownProps>(
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
      <path d="M12 5v14" />
  <path d="m19 12-7 7-7-7" />
    </svg>
  )
);
ArrowDown.displayName = "ArrowDown";
export const ArrowDownMetadata = { 
  id: "arrow-down", 
  baseId: "arrow-down", 
  variant: "default", 
  name: "Arrow Down", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowDown;
