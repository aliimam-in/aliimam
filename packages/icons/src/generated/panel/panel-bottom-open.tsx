/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PanelBottomOpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PanelBottomOpen = React.forwardRef<SVGSVGElement, PanelBottomOpenProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 15h18" />
  <path d="m9 10 3-3 3 3" />
    </svg>
  )
);
PanelBottomOpen.displayName = "PanelBottomOpen";
export const PanelBottomOpenMetadata = { id: "panel-bottom-open", baseId: "panel-bottom-open", variant: "default", name: "Panel Bottom Open", category: "panel", tags: [], viewBox: "0 0 24 24" } as const;
export default PanelBottomOpen;
