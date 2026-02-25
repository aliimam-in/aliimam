/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterZFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterZFilled = React.forwardRef<SVGSVGElement, CircleLetterZFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2 5h-4a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h2.382l-3.276 6.553a1 1 0 0 0 .894 1.447h4a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-2.382l3.276 -6.553a1 1 0 0 0 -.894 -1.447" />
    </svg>
  )
);
CircleLetterZFilled.displayName = "CircleLetterZFilled";
export const CircleLetterZFilledMetadata = { id: "circle-letter-z_filled", baseId: "circle-letter-z", variant: "filled", name: "Circle Letter Z", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleLetterZFilled;
