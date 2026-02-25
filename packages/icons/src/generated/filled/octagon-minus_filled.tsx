/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OctagonMinusFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const OctagonMinusFilled = React.forwardRef<SVGSVGElement, OctagonMinusFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M13.196 1.246l5.575 2.39a3.04 3.04 0 0 1 1.595 1.594l2.388 5.573c.328 .764 .328 1.63 0 2.393l-2.39 5.575a3.04 3.04 0 0 1 -1.594 1.595l-5.573 2.388a3.03 3.03 0 0 1 -2.393 0l-5.574 -2.389a3.04 3.04 0 0 1 -1.595 -1.595l-2.388 -5.574a3.04 3.04 0 0 1 0 -2.392l2.39 -5.575a3.04 3.04 0 0 1 1.593 -1.595l5.574 -2.388a3.04 3.04 0 0 1 2.392 0m1.804 9.754h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2" />
    </svg>
  )
);
OctagonMinusFilled.displayName = "OctagonMinusFilled";
export const OctagonMinusFilledMetadata = { id: "octagon-minus_filled", baseId: "octagon-minus", variant: "filled", name: "Octagon Minus", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default OctagonMinusFilled;
