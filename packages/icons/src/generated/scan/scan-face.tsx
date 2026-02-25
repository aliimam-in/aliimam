/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ScanFaceProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ScanFace = React.forwardRef<SVGSVGElement, ScanFaceProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
  <path d="M9 9h.01" />
  <path d="M15 9h.01" />
    </svg>
  )
);
ScanFace.displayName = "ScanFace";
export const ScanFaceMetadata = { id: "scan-face", baseId: "scan-face", variant: "default", name: "Scan Face", category: "scan", tags: [], viewBox: "0 0 24 24" } as const;
export default ScanFace;
