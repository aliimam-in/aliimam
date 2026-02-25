/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowDownFromLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowDownFromLine = React.forwardRef<SVGSVGElement, ArrowDownFromLineProps>(
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
      <path d="M19 3H5" />
  <path d="M12 21V7" />
  <path d="m6 15 6 6 6-6" />
    </svg>
  )
);
ArrowDownFromLine.displayName = "ArrowDownFromLine";
export const ArrowDownFromLineMetadata = { 
  id: "arrow-down-from-line", 
  baseId: "arrow-down-from-line", 
  variant: "default", 
  name: "Arrow Down From Line", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowDownFromLine;
