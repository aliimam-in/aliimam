/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleLetterVFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleLetterVFilled = React.forwardRef<SVGSVGElement, CircleLetterVFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2.243 5.03a1 1 0 0 0 -1.213 .727l-1.03 4.118l-1.03 -4.118a1 1 0 1 0 -1.94 .486l2 8c.252 1.01 1.688 1.01 1.94 0l2 -8a1 1 0 0 0 -.727 -1.213" />
    </svg>
  )
);
CircleLetterVFilled.displayName = "CircleLetterVFilled";
export const CircleLetterVFilledMetadata = { id: "circle-letter-v_filled", baseId: "circle-letter-v", variant: "filled", name: "Circle Letter V", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleLetterVFilled;
