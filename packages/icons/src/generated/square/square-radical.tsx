/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareRadicalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareRadical = React.forwardRef<SVGSVGElement, SquareRadicalProps>(
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
      <path d="M7 12h2l2 5 2-10h4" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
);
SquareRadical.displayName = "SquareRadical";
export const SquareRadicalMetadata = { 
  id: "square-radical", 
  baseId: "square-radical", 
  variant: "default", 
  name: "Square Radical", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareRadical;
