/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PanelTopDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PanelTopDashed = React.forwardRef<SVGSVGElement, PanelTopDashedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M14 9h1" />
  <path d="M19 9h2" />
  <path d="M3 9h2" />
  <path d="M9 9h1" />
    </svg>
  )
);
PanelTopDashed.displayName = "PanelTopDashed";
export const PanelTopDashedMetadata = { id: "panel-top-dashed", baseId: "panel-top-dashed", variant: "default", name: "Panel Top Dashed", category: "panel", tags: [], viewBox: "0 0 24 24" } as const;
export default PanelTopDashed;
