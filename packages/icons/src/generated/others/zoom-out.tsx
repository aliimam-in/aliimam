/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZoomOutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZoomOut = React.forwardRef<SVGSVGElement, ZoomOutProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="11" cy="11" r="8" />
  <line x1="21" x2="16.65" y1="21" y2="16.65" />
  <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  )
);
ZoomOut.displayName = "ZoomOut";
export const ZoomOutMetadata = { id: "zoom-out", baseId: "zoom-out", variant: "default", name: "Zoom Out", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default ZoomOut;
