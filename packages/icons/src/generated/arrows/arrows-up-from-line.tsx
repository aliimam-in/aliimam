/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowsUpFromLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowsUpFromLine = React.forwardRef<SVGSVGElement, ArrowsUpFromLineProps>(
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
      <path d="m4 6 3-3 3 3" />
  <path d="M7 17V3" />
  <path d="m14 6 3-3 3 3" />
  <path d="M17 17V3" />
  <path d="M4 21h16" />
    </svg>
  )
);
ArrowsUpFromLine.displayName = "ArrowsUpFromLine";
export const ArrowsUpFromLineMetadata = { 
  id: "arrows-up-from-line", 
  baseId: "arrows-up-from-line", 
  variant: "default", 
  name: "Arrows Up From Line", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowsUpFromLine;
