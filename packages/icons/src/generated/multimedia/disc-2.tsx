/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Disc2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Disc2 = React.forwardRef<SVGSVGElement, Disc2Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="4" />
  <path d="M12 12h.01" />
    </svg>
  )
);
Disc2.displayName = "Disc2";
export const Disc2Metadata = { id: "disc-2", baseId: "disc-2", variant: "default", name: "Disc 2", category: "multimedia", tags: [], viewBox: "0 0 24 24" } as const;
export default Disc2;
