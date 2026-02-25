/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowBigDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowBigDown = React.forwardRef<SVGSVGElement, ArrowBigDownProps>(
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
      <path d="M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z" />
    </svg>
  )
);
ArrowBigDown.displayName = "ArrowBigDown";
export const ArrowBigDownMetadata = { 
  id: "arrow-big-down", 
  baseId: "arrow-big-down", 
  variant: "default", 
  name: "Arrow Big Down", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowBigDown;
