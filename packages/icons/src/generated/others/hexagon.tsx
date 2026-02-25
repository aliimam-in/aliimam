/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HexagonProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Hexagon = React.forwardRef<SVGSVGElement, HexagonProps>(
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  )
);
Hexagon.displayName = "Hexagon";
export const HexagonMetadata = { 
  id: "hexagon", 
  baseId: "hexagon", 
  variant: "default", 
  name: "Hexagon", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Hexagon;
