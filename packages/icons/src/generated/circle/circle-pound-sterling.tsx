/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CirclePoundSterlingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CirclePoundSterling = React.forwardRef<SVGSVGElement, CirclePoundSterlingProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M10 16V9.5a1 1 0 0 1 5 0" />
  <path d="M8 12h4" />
  <path d="M8 16h7" />
    </svg>
  )
);
CirclePoundSterling.displayName = "CirclePoundSterling";
export const CirclePoundSterlingMetadata = { id: "circle-pound-sterling", baseId: "circle-pound-sterling", variant: "default", name: "Circle Pound Sterling", category: "circle", tags: [], viewBox: "0 0 24 24" } as const;
export default CirclePoundSterling;
