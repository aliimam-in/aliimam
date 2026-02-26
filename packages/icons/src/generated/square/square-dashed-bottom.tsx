/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareDashedBottomProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareDashedBottom = React.forwardRef<SVGSVGElement, SquareDashedBottomProps>(
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
      <path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" />
  <path d="M9 21h1" />
  <path d="M14 21h1" />
    </svg>
  )
);
SquareDashedBottom.displayName = "SquareDashedBottom";
export const SquareDashedBottomMetadata = { 
  id: "square-dashed-bottom", 
  baseId: "square-dashed-bottom", 
  variant: "default", 
  name: "Square Dashed Bottom", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareDashedBottom;
