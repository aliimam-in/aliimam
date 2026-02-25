/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterQFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterQFilled = React.forwardRef<SVGSVGElement, CircleLetterQFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m0 5a3 3 0 0 0 -3 3v4a3 3 0 0 0 4.168 2.764l.125 -.057a1 1 0 0 0 1.414 -1.414l.057 -.125a3 3 0 0 0 .236 -1.168v-4a3 3 0 0 0 -3 -3m1 7.001h-.059a.996 .996 0 0 0 -.941 1a1 1 0 0 1 -1 -1.001v-4a1 1 0 0 1 2 0z" />
    </svg>
  )
);
CircleLetterQFilled.displayName = "CircleLetterQFilled";
export const CircleLetterQFilledMetadata = { id: "circle-letter-q_filled", baseId: "circle-letter-q", variant: "filled", name: "Circle Letter Q", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleLetterQFilled;
