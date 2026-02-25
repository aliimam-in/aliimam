/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUpFromLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUpFromLine = React.forwardRef<SVGSVGElement, ArrowUpFromLineProps>(
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
      <path d="m18 9-6-6-6 6" />
  <path d="M12 3v14" />
  <path d="M5 21h14" />
    </svg>
  )
);
ArrowUpFromLine.displayName = "ArrowUpFromLine";
export const ArrowUpFromLineMetadata = { 
  id: "arrow-up-from-line", 
  baseId: "arrow-up-from-line", 
  variant: "default", 
  name: "Arrow Up From Line", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUpFromLine;
