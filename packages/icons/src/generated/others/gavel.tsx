/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GavelProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gavel = React.forwardRef<SVGSVGElement, GavelProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" />
  <path d="m16 16 6-6" />
  <path d="m21.5 10.5-8-8" />
  <path d="m8 8 6-6" />
  <path d="m8.5 7.5 8 8" />
    </svg>
  )
);
Gavel.displayName = "Gavel";
export const GavelMetadata = { id: "gavel", baseId: "gavel", variant: "default", name: "Gavel", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Gavel;
