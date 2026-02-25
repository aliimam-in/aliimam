/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleMinus = React.forwardRef<SVGSVGElement, CircleMinusProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M8 12h8" />
    </svg>
  )
);
CircleMinus.displayName = "CircleMinus";
export const CircleMinusMetadata = { id: "circle-minus", baseId: "circle-minus", variant: "default", name: "Circle Minus", category: "circle", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleMinus;
