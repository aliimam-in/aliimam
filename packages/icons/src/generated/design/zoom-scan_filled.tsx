/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZoomScanFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZoomScanFilled = React.forwardRef<SVGSVGElement, ZoomScanFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M4 15a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2h-2a3 3 0 0 1 -3 -3v-2a1 1 0 0 1 1 -1" />
  <path d="M20 15a1 1 0 0 1 1 1v2a3 3 0 0 1 -3 3h-2a1 1 0 0 1 0 -2h2a1 1 0 0 0 1 -1v-2a1 1 0 0 1 1 -1" />
  <path d="M11 7a4 4 0 0 1 3.446 6.031l2.261 2.262a1 1 0 0 1 -1.414 1.414l-2.262 -2.26l-.031 .017a4 4 0 0 1 -6 -3.464l.005 -.2a4 4 0 0 1 3.995 -3.8" />
  <path d="M8 3a1 1 0 1 1 0 2h-2a1 1 0 0 0 -1 1v2a1 1 0 1 1 -2 0v-2a3 3 0 0 1 3 -3z" />
  <path d="M18 3a3 3 0 0 1 3 3v2a1 1 0 0 1 -2 0v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 0 -2z" />
    </svg>
  )
);
ZoomScanFilled.displayName = "ZoomScanFilled";
export const ZoomScanFilledMetadata = { 
  id: "zoom-scan_filled", 
  baseId: "zoom-scan", 
  variant: "filled", 
  name: "Zoom Scan", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ZoomScanFilled;
