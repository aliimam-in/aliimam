/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CctvProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cctv = React.forwardRef<SVGSVGElement, CctvProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" />
  <path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" />
  <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
  <path d="M2 21v-4" />
  <path d="M7 9h.01" />
    </svg>
  )
);
Cctv.displayName = "Cctv";
export const CctvMetadata = { id: "cctv", baseId: "cctv", variant: "default", name: "Cctv", category: "multimedia", tags: [], viewBox: "0 0 24 24" } as const;
export default Cctv;
