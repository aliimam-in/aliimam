/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CirclePercentageFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CirclePercentageFilled = React.forwardRef<SVGSVGElement, CirclePercentageFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -20 0l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72m3 12.12a1 1 0 0 0 -1 1v.015a1 1 0 0 0 2 0v-.015a1 1 0 0 0 -1 -1m.707 -5.752a1 1 0 0 0 -1.414 0l-6 6a1 1 0 0 0 1.414 1.414l6 -6a1 1 0 0 0 0 -1.414m-6.707 -.263a1 1 0 0 0 -1 1v.015a1 1 0 1 0 2 0v-.015a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
CirclePercentageFilled.displayName = "CirclePercentageFilled";
export const CirclePercentageFilledMetadata = { id: "circle-percentage_filled", baseId: "circle-percentage", variant: "filled", name: "Circle Percentage", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CirclePercentageFilled;
