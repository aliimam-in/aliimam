/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BounceRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BounceRightFilled = React.forwardRef<SVGSVGElement, BounceRightFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M14.143 11.486a1 1 0 0 1 1.714 1.028c-1.502 2.505 -2.41 4.89 -2.87 7.65c-.16 .956 -1.448 1.15 -1.881 .283c-2.06 -4.12 -3.858 -4.976 -6.79 -3.998a1 1 0 1 1 -.632 -1.898c3.2 -1.067 5.656 -.373 7.803 2.623l.091 .13l.011 -.04c.522 -1.828 1.267 -3.55 2.273 -5.3l.28 -.478z" />
  <path d="M18 4a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
    </svg>
  )
);
BounceRightFilled.displayName = "BounceRightFilled";
export const BounceRightFilledMetadata = { id: "bounce-right_filled", baseId: "bounce-right", variant: "filled", name: "Bounce Right", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default BounceRightFilled;
