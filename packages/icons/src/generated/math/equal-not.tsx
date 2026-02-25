/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EqualNotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EqualNot = React.forwardRef<SVGSVGElement, EqualNotProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <line x1="5" x2="19" y1="9" y2="9" />
  <line x1="5" x2="19" y1="15" y2="15" />
  <line x1="19" x2="5" y1="5" y2="19" />
    </svg>
  )
);
EqualNot.displayName = "EqualNot";
export const EqualNotMetadata = { id: "equal-not", baseId: "equal-not", variant: "default", name: "Equal Not", category: "math", tags: [], viewBox: "0 0 24 24" } as const;
export default EqualNot;
