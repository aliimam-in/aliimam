/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EqualProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Equal = React.forwardRef<SVGSVGElement, EqualProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <line x1="5" x2="19" y1="9" y2="9" />
  <line x1="5" x2="19" y1="15" y2="15" />
    </svg>
  )
);
Equal.displayName = "Equal";
export const EqualMetadata = { id: "equal", baseId: "equal", variant: "default", name: "Equal", category: "math", tags: [], viewBox: "0 0 24 24" } as const;
export default Equal;
