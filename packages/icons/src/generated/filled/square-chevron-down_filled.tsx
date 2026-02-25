/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareChevronDownFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareChevronDownFilled = React.forwardRef<SVGSVGElement, SquareChevronDownFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-9.387 8.21a1 1 0 0 0 -1.32 1.497l3 3l.094 .083a1 1 0 0 0 1.32 -.083l3 -3l.083 -.094a1 1 0 0 0 -.083 -1.32l-.094 -.083a1 1 0 0 0 -1.32 .083l-2.293 2.292l-2.293 -2.292z" />
    </svg>
  )
);
SquareChevronDownFilled.displayName = "SquareChevronDownFilled";
export const SquareChevronDownFilledMetadata = { id: "square-chevron-down_filled", baseId: "square-chevron-down", variant: "filled", name: "Square Chevron Down", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareChevronDownFilled;
