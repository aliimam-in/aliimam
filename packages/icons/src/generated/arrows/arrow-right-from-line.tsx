/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowRightFromLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowRightFromLine = React.forwardRef<SVGSVGElement, ArrowRightFromLineProps>(
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
      <path d="M3 5v14" />
  <path d="M21 12H7" />
  <path d="m15 18 6-6-6-6" />
    </svg>
  )
);
ArrowRightFromLine.displayName = "ArrowRightFromLine";
export const ArrowRightFromLineMetadata = { 
  id: "arrow-right-from-line", 
  baseId: "arrow-right-from-line", 
  variant: "default", 
  name: "Arrow Right From Line", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowRightFromLine;
