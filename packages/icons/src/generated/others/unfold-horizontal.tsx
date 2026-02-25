/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UnfoldHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UnfoldHorizontal = React.forwardRef<SVGSVGElement, UnfoldHorizontalProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 12h6" />
  <path d="M8 12H2" />
  <path d="M12 2v2" />
  <path d="M12 8v2" />
  <path d="M12 14v2" />
  <path d="M12 20v2" />
  <path d="m19 15 3-3-3-3" />
  <path d="m5 9-3 3 3 3" />
    </svg>
  )
);
UnfoldHorizontal.displayName = "UnfoldHorizontal";
export const UnfoldHorizontalMetadata = { id: "unfold-horizontal", baseId: "unfold-horizontal", variant: "default", name: "Unfold Horizontal", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default UnfoldHorizontal;
