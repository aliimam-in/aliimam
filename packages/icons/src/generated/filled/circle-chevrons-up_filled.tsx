/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleChevronsUpFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleChevronsUpFilled = React.forwardRef<SVGSVGElement, CircleChevronsUpFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11.867 2.001c5.495 0 9.96 4.432 10 9.926s-4.359 9.993 -9.852 10.073h-.295c-5.493 -.081 -9.893 -4.579 -9.852 -10.073c.04 -5.494 4.505 -9.926 10 -9.926m.84 9.292a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.292 -2.292l2.293 2.292a1 1 0 0 0 1.414 -1.414zm0 -4a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.292 -2.292l2.293 2.292a1 1 0 0 0 1.414 -1.414z" />
    </svg>
  )
);
CircleChevronsUpFilled.displayName = "CircleChevronsUpFilled";
export const CircleChevronsUpFilledMetadata = { id: "circle-chevrons-up_filled", baseId: "circle-chevrons-up", variant: "filled", name: "Circle Chevrons Up", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleChevronsUpFilled;
