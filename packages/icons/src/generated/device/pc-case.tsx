/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PcCaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PcCase = React.forwardRef<SVGSVGElement, PcCaseProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="14" height="20" x="5" y="2" rx="2" />
  <path d="M15 14h.01" />
  <path d="M9 6h6" />
  <path d="M9 10h6" />
    </svg>
  )
);
PcCase.displayName = "PcCase";
export const PcCaseMetadata = { id: "pc-case", baseId: "pc-case", variant: "default", name: "Pc Case", category: "device", tags: [], viewBox: "0 0 24 24" } as const;
export default PcCase;
