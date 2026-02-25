/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OmegaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Omega = React.forwardRef<SVGSVGElement, OmegaProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21" />
    </svg>
  )
);
Omega.displayName = "Omega";
export const OmegaMetadata = { id: "omega", baseId: "omega", variant: "default", name: "Omega", category: "math", tags: [], viewBox: "0 0 24 24" } as const;
export default Omega;
