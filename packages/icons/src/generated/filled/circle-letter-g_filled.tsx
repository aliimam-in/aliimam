/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterGFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterGFilled = React.forwardRef<SVGSVGElement, CircleLetterGFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2 5h-2a3 3 0 0 0 -3 3v4a3 3 0 0 0 3 3h2a1 1 0 0 0 1 -1v-4a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883v2h-1a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2a1 1 0 0 0 0 -2" />
    </svg>
  )
);
CircleLetterGFilled.displayName = "CircleLetterGFilled";
export const CircleLetterGFilledMetadata = { id: "circle-letter-g_filled", baseId: "circle-letter-g", variant: "filled", name: "Circle Letter G", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleLetterGFilled;
