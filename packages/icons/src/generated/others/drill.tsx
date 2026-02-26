/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DrillProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Drill = React.forwardRef<SVGSVGElement, DrillProps>(
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
      <path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" />
  <path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8" />
  <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
  <path d="M18 6h4" />
  <path d="m5 10-2 8" />
  <path d="m7 18 2-8" />
    </svg>
  )
);
Drill.displayName = "Drill";
export const DrillMetadata = { 
  id: "drill", 
  baseId: "drill", 
  variant: "default", 
  name: "Drill", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Drill;
