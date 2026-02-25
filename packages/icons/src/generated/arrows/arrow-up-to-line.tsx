/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUpToLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUpToLine = React.forwardRef<SVGSVGElement, ArrowUpToLineProps>(
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
      <path d="M5 3h14" />
  <path d="m18 13-6-6-6 6" />
  <path d="M12 7v14" />
    </svg>
  )
);
ArrowUpToLine.displayName = "ArrowUpToLine";
export const ArrowUpToLineMetadata = { 
  id: "arrow-up-to-line", 
  baseId: "arrow-up-to-line", 
  variant: "default", 
  name: "Arrow Up To Line", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUpToLine;
