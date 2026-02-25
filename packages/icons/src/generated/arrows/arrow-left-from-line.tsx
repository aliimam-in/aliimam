/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowLeftFromLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowLeftFromLine = React.forwardRef<SVGSVGElement, ArrowLeftFromLineProps>(
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
      <path d="m9 6-6 6 6 6" />
  <path d="M3 12h14" />
  <path d="M21 19V5" />
    </svg>
  )
);
ArrowLeftFromLine.displayName = "ArrowLeftFromLine";
export const ArrowLeftFromLineMetadata = { 
  id: "arrow-left-from-line", 
  baseId: "arrow-left-from-line", 
  variant: "default", 
  name: "Arrow Left From Line", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowLeftFromLine;
