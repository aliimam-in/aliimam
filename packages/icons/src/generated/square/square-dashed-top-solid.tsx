/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareDashedTopSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareDashedTopSolid = React.forwardRef<SVGSVGElement, SquareDashedTopSolidProps>(
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
      <path d="M14 21h1" />
  <path d="M21 14v1" />
  <path d="M21 19a2 2 0 0 1-2 2" />
  <path d="M21 9v1" />
  <path d="M3 14v1" />
  <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
  <path d="M3 9v1" />
  <path d="M5 21a2 2 0 0 1-2-2" />
  <path d="M9 21h1" />
    </svg>
  )
);
SquareDashedTopSolid.displayName = "SquareDashedTopSolid";
export const SquareDashedTopSolidMetadata = { 
  id: "square-dashed-top-solid", 
  baseId: "square-dashed-top-solid", 
  variant: "default", 
  name: "Square Dashed Top Solid", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareDashedTopSolid;
