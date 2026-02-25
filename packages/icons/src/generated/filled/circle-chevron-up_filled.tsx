/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleChevronUpFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleChevronUpFilled = React.forwardRef<SVGSVGElement, CircleChevronUpFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-4.293 5.953a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l2.293 2.292a1 1 0 0 0 1.414 -1.414z" />
    </svg>
  )
);
CircleChevronUpFilled.displayName = "CircleChevronUpFilled";
export const CircleChevronUpFilledMetadata = { id: "circle-chevron-up_filled", baseId: "circle-chevron-up", variant: "filled", name: "Circle Chevron Up", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleChevronUpFilled;
