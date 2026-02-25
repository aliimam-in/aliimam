/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterIFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterIFilled = React.forwardRef<SVGSVGElement, CircleLetterIFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m0 5a1 1 0 0 0 -1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
CircleLetterIFilled.displayName = "CircleLetterIFilled";
export const CircleLetterIFilledMetadata = { id: "circle-letter-i_filled", baseId: "circle-letter-i", variant: "filled", name: "Circle Letter I", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleLetterIFilled;
