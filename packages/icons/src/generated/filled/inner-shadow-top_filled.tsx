/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface InnerShadowTopFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const InnerShadowTopFilled = React.forwardRef<SVGSVGElement, InnerShadowTopFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M4.929 4.929c3.905 -3.905 10.237 -3.905 14.142 0c3.905 3.905 3.905 10.237 0 14.142c-3.905 3.905 -10.237 3.905 -14.142 0c-3.905 -3.905 -3.905 -10.237 0 -14.142zm12.02 2.121a7 7 0 0 0 -9.899 0a1 1 0 0 0 1.414 1.414a5 5 0 0 1 7.072 0a1 1 0 0 0 1.414 -1.414z" />
    </svg>
  )
);
InnerShadowTopFilled.displayName = "InnerShadowTopFilled";
export const InnerShadowTopFilledMetadata = { id: "inner-shadow-top_filled", baseId: "inner-shadow-top", variant: "filled", name: "Inner Shadow Top", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default InnerShadowTopFilled;
