/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WeightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Weight = React.forwardRef<SVGSVGElement, WeightProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="5" r="3" />
  <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />
    </svg>
  )
);
Weight.displayName = "Weight";
export const WeightMetadata = { id: "weight", baseId: "weight", variant: "default", name: "Weight", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Weight;
