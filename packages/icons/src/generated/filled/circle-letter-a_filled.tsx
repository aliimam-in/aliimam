/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterAFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterAFilled = React.forwardRef<SVGSVGElement, CircleLetterAFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m0 5a3 3 0 0 0 -3 3v6a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-6a3 3 0 0 0 -3 -3m0 2a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 .883 -.993z" />
    </svg>
  )
);
CircleLetterAFilled.displayName = "CircleLetterAFilled";
export const CircleLetterAFilledMetadata = { id: "circle-letter-a_filled", baseId: "circle-letter-a", variant: "filled", name: "Circle Letter A", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleLetterAFilled;
