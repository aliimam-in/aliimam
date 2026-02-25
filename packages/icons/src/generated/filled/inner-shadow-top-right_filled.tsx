/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface InnerShadowTopRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const InnerShadowTopRightFilled = React.forwardRef<SVGSVGElement, InnerShadowTopRightFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm0 3a1 1 0 0 0 0 2a5 5 0 0 1 5 5a1 1 0 0 0 2 0a7 7 0 0 0 -7 -7z" />
    </svg>
  )
);
InnerShadowTopRightFilled.displayName = "InnerShadowTopRightFilled";
export const InnerShadowTopRightFilledMetadata = { id: "inner-shadow-top-right_filled", baseId: "inner-shadow-top-right", variant: "filled", name: "Inner Shadow Top Right", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default InnerShadowTopRightFilled;
