/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GasStationFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GasStationFilled = React.forwardRef<SVGSVGElement, GasStationFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M3 21a1 1 0 0 1 0 -2v-13a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4a3 3 0 0 1 3 3v3a.5 .5 0 1 0 1 0v-6a2 2 0 0 1 -2 -2v-.585l-.707 -.708a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.414 0l3.003 3.002l.095 .112l.028 .04l.044 .073l.052 .11l.031 .09l.02 .076l.012 .078l.008 .126v7a2.5 2.5 0 1 1 -5 0v-3a1 1 0 0 0 -1 -1v7a1 1 0 0 1 0 2zm9 -16h-6a1 1 0 0 0 -1 1v4h8v-4a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
GasStationFilled.displayName = "GasStationFilled";
export const GasStationFilledMetadata = { id: "gas-station_filled", baseId: "gas-station", variant: "filled", name: "Gas Station", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default GasStationFilled;
