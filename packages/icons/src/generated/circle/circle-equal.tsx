/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleEqualProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleEqual = React.forwardRef<SVGSVGElement, CircleEqualProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M7 10h10" />
  <path d="M7 14h10" />
    </svg>
  )
);
CircleEqual.displayName = "CircleEqual";
export const CircleEqualMetadata = { id: "circle-equal", baseId: "circle-equal", variant: "default", name: "Circle Equal", category: "circle", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleEqual;
