/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleDot = React.forwardRef<SVGSVGElement, CircleDotProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="1" />
    </svg>
  )
);
CircleDot.displayName = "CircleDot";
export const CircleDotMetadata = { id: "circle-dot", baseId: "circle-dot", variant: "default", name: "Circle Dot", category: "circle", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleDot;
