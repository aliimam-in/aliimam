/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ScanHeartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ScanHeart = React.forwardRef<SVGSVGElement, ScanHeartProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  <path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z" />
    </svg>
  )
);
ScanHeart.displayName = "ScanHeart";
export const ScanHeartMetadata = { id: "scan-heart", baseId: "scan-heart", variant: "default", name: "Scan Heart", category: "scan", tags: [], viewBox: "0 0 24 24" } as const;
export default ScanHeart;
