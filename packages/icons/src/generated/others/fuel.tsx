/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FuelProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Fuel = React.forwardRef<SVGSVGElement, FuelProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" />
  <path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" />
  <path d="M2 21h13" />
  <path d="M3 9h11" />
    </svg>
  )
);
Fuel.displayName = "Fuel";
export const FuelMetadata = { id: "fuel", baseId: "fuel", variant: "default", name: "Fuel", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Fuel;
