/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GlobeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Globe = React.forwardRef<SVGSVGElement, GlobeProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
  <path d="M2 12h20" />
    </svg>
  )
);
Globe.displayName = "Globe";
export const GlobeMetadata = { id: "globe", baseId: "globe", variant: "default", name: "Globe", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Globe;
