/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowRight2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowRight2Filled = React.forwardRef<SVGSVGElement, ArrowRight2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M15.1999 10.4899L13.2299 8.51993L10.0199 5.30993C9.33993 4.63993 8.17993 5.11993 8.17993 6.07993V12.3099V17.9199C8.17993 18.8799 9.33993 19.3599 10.0199 18.6799L15.1999 13.4999C16.0299 12.6799 16.0299 11.3199 15.1999 10.4899Z" fill="currentColor"/>
    </svg>
  )
);
ArrowRight2Filled.displayName = "ArrowRight2Filled";
export const ArrowRight2FilledMetadata = { 
  id: "arrow-right-2_filled", 
  baseId: "arrow-right-2", 
  variant: "filled", 
  name: "Arrow Right 2", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowRight2Filled;
