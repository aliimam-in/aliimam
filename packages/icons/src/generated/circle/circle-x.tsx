/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleX = React.forwardRef<SVGSVGElement, CircleXProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="m15 9-6 6" />
  <path d="m9 9 6 6" />
    </svg>
  )
);
CircleX.displayName = "CircleX";
export const CircleXMetadata = { id: "circle-x", baseId: "circle-x", variant: "default", name: "Circle X", category: "circle", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleX;
