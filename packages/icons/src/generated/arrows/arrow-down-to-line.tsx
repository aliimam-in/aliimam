/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowDownToLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowDownToLine = React.forwardRef<SVGSVGElement, ArrowDownToLineProps>(
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
      <path d="M12 17V3" />
  <path d="m6 11 6 6 6-6" />
  <path d="M19 21H5" />
    </svg>
  )
);
ArrowDownToLine.displayName = "ArrowDownToLine";
export const ArrowDownToLineMetadata = { 
  id: "arrow-down-to-line", 
  baseId: "arrow-down-to-line", 
  variant: "default", 
  name: "Arrow Down To Line", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowDownToLine;
