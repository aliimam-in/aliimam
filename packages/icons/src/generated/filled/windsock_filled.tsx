/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WindsockFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WindsockFilled = React.forwardRef<SVGSVGElement, WindsockFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M6 2a1 1 0 0 1 1 1v1.079l11.083 .924a1 1 0 0 1 .917 .997v4a1 1 0 0 1 -.917 .997l-11.083 .923v8.08h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0 -2h1v-17a1 1 0 0 1 1 -1m1 4.086v3.827l3 -.25v-3.327zm7 .584v2.659l3 -.25v-2.159z" />
    </svg>
  )
);
WindsockFilled.displayName = "WindsockFilled";
export const WindsockFilledMetadata = { id: "windsock_filled", baseId: "windsock", variant: "filled", name: "Windsock", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default WindsockFilled;
