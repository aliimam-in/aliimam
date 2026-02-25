/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PentagonProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Pentagon = React.forwardRef<SVGSVGElement, PentagonProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z" />
    </svg>
  )
);
Pentagon.displayName = "Pentagon";
export const PentagonMetadata = { id: "pentagon", baseId: "pentagon", variant: "default", name: "Pentagon", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Pentagon;
