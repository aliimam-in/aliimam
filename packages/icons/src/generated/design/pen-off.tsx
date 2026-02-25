/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PenOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PenOff = React.forwardRef<SVGSVGElement, PenOffProps>(
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
      <path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" />
  <path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" />
  <path d="m2 2 20 20" />
    </svg>
  )
);
PenOff.displayName = "PenOff";
export const PenOffMetadata = { 
  id: "pen-off", 
  baseId: "pen-off", 
  variant: "default", 
  name: "Pen Off", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PenOff;
