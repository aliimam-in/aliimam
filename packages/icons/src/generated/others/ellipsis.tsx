/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EllipsisProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ellipsis = React.forwardRef<SVGSVGElement, EllipsisProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="1" />
  <circle cx="19" cy="12" r="1" />
  <circle cx="5" cy="12" r="1" />
    </svg>
  )
);
Ellipsis.displayName = "Ellipsis";
export const EllipsisMetadata = { id: "ellipsis", baseId: "ellipsis", variant: "default", name: "Ellipsis", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Ellipsis;
