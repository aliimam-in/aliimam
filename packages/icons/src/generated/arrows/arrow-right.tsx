/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowRight = React.forwardRef<SVGSVGElement, ArrowRightProps>(
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
      <path d="M5 12h14" />
  <path d="m12 5 7 7-7 7" />
    </svg>
  )
);
ArrowRight.displayName = "ArrowRight";
export const ArrowRightMetadata = { 
  id: "arrow-right", 
  baseId: "arrow-right", 
  variant: "default", 
  name: "Arrow Right", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowRight;
