/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PanelRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PanelRight = React.forwardRef<SVGSVGElement, PanelRightProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M15 3v18" />
    </svg>
  )
);
PanelRight.displayName = "PanelRight";
export const PanelRightMetadata = { id: "panel-right", baseId: "panel-right", variant: "default", name: "Panel Right", category: "panel", tags: [], viewBox: "0 0 24 24" } as const;
export default PanelRight;
