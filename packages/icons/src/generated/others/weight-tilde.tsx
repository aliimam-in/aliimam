/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WeightTildeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WeightTilde = React.forwardRef<SVGSVGElement, WeightTildeProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z" />
  <path d="M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0" />
  <circle cx="12" cy="5" r="3" />
    </svg>
  )
);
WeightTilde.displayName = "WeightTilde";
export const WeightTildeMetadata = { id: "weight-tilde", baseId: "weight-tilde", variant: "default", name: "Weight Tilde", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default WeightTilde;
