/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleChevronDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleChevronDown = React.forwardRef<SVGSVGElement, CircleChevronDownProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="m16 10-4 4-4-4" />
    </svg>
  )
);
CircleChevronDown.displayName = "CircleChevronDown";
export const CircleChevronDownMetadata = { id: "circle-chevron-down", baseId: "circle-chevron-down", variant: "default", name: "Circle Chevron Down", category: "circle", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleChevronDown;
