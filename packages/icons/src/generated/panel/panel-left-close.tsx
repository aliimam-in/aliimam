/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PanelLeftCloseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PanelLeftClose = React.forwardRef<SVGSVGElement, PanelLeftCloseProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M9 3v18" />
  <path d="m16 15-3-3 3-3" />
    </svg>
  )
);
PanelLeftClose.displayName = "PanelLeftClose";
export const PanelLeftCloseMetadata = { id: "panel-left-close", baseId: "panel-left-close", variant: "default", name: "Panel Left Close", category: "panel", tags: [], viewBox: "0 0 24 24" } as const;
export default PanelLeftClose;
