/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SaudiRiyalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SaudiRiyal = React.forwardRef<SVGSVGElement, SaudiRiyalProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m20 19.5-5.5 1.2" />
  <path d="M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2" />
  <path d="m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2" />
  <path d="M20 10 4 13.5" />
    </svg>
  )
);
SaudiRiyal.displayName = "SaudiRiyal";
export const SaudiRiyalMetadata = { id: "saudi-riyal", baseId: "saudi-riyal", variant: "default", name: "Saudi Riyal", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default SaudiRiyal;
