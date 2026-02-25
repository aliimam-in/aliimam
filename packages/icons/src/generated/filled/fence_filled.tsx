/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FenceFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FenceFilled = React.forwardRef<SVGSVGElement, FenceFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 17v3a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-3z" />
  <path d="M11 17v3a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-3z" />
  <path d="M20 12a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" />
  <path d="M8.707 3.293l2 2a1 1 0 0 1 .293 .707v5h-6v-5a1 1 0 0 1 .293 -.707l2 -2a1 1 0 0 1 1.414 0" />
  <path d="M16.707 3.293l2 2a1 1 0 0 1 .293 .707v5h-6v-5a1 1 0 0 1 .293 -.707l2 -2a1 1 0 0 1 1.414 0" />
    </svg>
  )
);
FenceFilled.displayName = "FenceFilled";
export const FenceFilledMetadata = { id: "fence_filled", baseId: "fence", variant: "filled", name: "Fence", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default FenceFilled;
