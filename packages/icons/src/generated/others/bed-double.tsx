/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BedDoubleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BedDouble = React.forwardRef<SVGSVGElement, BedDoubleProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
  <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
  <path d="M12 4v6" />
  <path d="M2 18h20" />
    </svg>
  )
);
BedDouble.displayName = "BedDouble";
export const BedDoubleMetadata = { id: "bed-double", baseId: "bed-double", variant: "default", name: "Bed Double", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default BedDouble;
