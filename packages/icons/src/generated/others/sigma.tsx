/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SigmaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sigma = React.forwardRef<SVGSVGElement, SigmaProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2" />
    </svg>
  )
);
Sigma.displayName = "Sigma";
export const SigmaMetadata = { id: "sigma", baseId: "sigma", variant: "default", name: "Sigma", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Sigma;
