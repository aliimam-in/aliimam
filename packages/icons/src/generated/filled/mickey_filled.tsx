/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MickeyFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MickeyFilled = React.forwardRef<SVGSVGElement, MickeyFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M18.501 2a4.5 4.5 0 0 1 .878 8.913a8 8 0 1 1 -15.374 3.372l-.005 -.285l.005 -.285a7.991 7.991 0 0 1 .615 -2.803a4.5 4.5 0 0 1 -3.187 -6.348a4.505 4.505 0 0 1 3.596 -2.539l.225 -.018l.281 -.007l.244 .009a4.5 4.5 0 0 1 4.215 4.247a8.001 8.001 0 0 1 4.013 0a4.5 4.5 0 0 1 4.493 -4.256z" />
    </svg>
  )
);
MickeyFilled.displayName = "MickeyFilled";
export const MickeyFilledMetadata = { id: "mickey_filled", baseId: "mickey", variant: "filled", name: "Mickey", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default MickeyFilled;
