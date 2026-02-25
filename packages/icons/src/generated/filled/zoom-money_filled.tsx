/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZoomMoneyFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZoomMoneyFilled = React.forwardRef<SVGSVGElement, ZoomMoneyFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-2 2.928h-2.5a2.5 2.5 0 0 0 0 5h1a.5 .5 0 1 1 0 1h-2.5a1 1 0 0 0 0 2h2.5a2.5 2.5 0 1 0 0 -5h-1a.5 .5 0 0 1 0 -1h2.5a1 1 0 0 0 0 -2" />
    </svg>
  )
);
ZoomMoneyFilled.displayName = "ZoomMoneyFilled";
export const ZoomMoneyFilledMetadata = { id: "zoom-money_filled", baseId: "zoom-money", variant: "filled", name: "Zoom Money", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default ZoomMoneyFilled;
