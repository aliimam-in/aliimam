/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleEllipsisProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleEllipsis = React.forwardRef<SVGSVGElement, CircleEllipsisProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M17 12h.01" />
  <path d="M12 12h.01" />
  <path d="M7 12h.01" />
    </svg>
  )
);
CircleEllipsis.displayName = "CircleEllipsis";
export const CircleEllipsisMetadata = { id: "circle-ellipsis", baseId: "circle-ellipsis", variant: "default", name: "Circle Ellipsis", category: "circle", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleEllipsis;
