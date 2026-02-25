/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PanelRightDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PanelRightDashed = React.forwardRef<SVGSVGElement, PanelRightDashedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M15 14v1" />
  <path d="M15 19v2" />
  <path d="M15 3v2" />
  <path d="M15 9v1" />
    </svg>
  )
);
PanelRightDashed.displayName = "PanelRightDashed";
export const PanelRightDashedMetadata = { id: "panel-right-dashed", baseId: "panel-right-dashed", variant: "default", name: "Panel Right Dashed", category: "panel", tags: [], viewBox: "0 0 24 24" } as const;
export default PanelRightDashed;
