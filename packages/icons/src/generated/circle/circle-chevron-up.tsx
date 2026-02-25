/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleChevronUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleChevronUp = React.forwardRef<SVGSVGElement, CircleChevronUpProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="m8 14 4-4 4 4" />
    </svg>
  )
);
CircleChevronUp.displayName = "CircleChevronUp";
export const CircleChevronUpMetadata = { id: "circle-chevron-up", baseId: "circle-chevron-up", variant: "default", name: "Circle Chevron Up", category: "circle", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleChevronUp;
