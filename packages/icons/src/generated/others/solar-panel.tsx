/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SolarPanelProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SolarPanel = React.forwardRef<SVGSVGElement, SolarPanelProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11 2h2" />
  <path d="m14.28 14-4.56 8" />
  <path d="m21 22-1.558-4H4.558" />
  <path d="M3 10v2" />
  <path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z" />
  <path d="M7 2a4 4 0 0 1-4 4" />
  <path d="m8.66 7.66 1.41 1.41" />
    </svg>
  )
);
SolarPanel.displayName = "SolarPanel";
export const SolarPanelMetadata = { id: "solar-panel", baseId: "solar-panel", variant: "default", name: "Solar Panel", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default SolarPanel;
