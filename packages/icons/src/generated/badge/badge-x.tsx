/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BadgeXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BadgeX = React.forwardRef<SVGSVGElement, BadgeXProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
  <line x1="15" x2="9" y1="9" y2="15" />
  <line x1="9" x2="15" y1="9" y2="15" />
    </svg>
  )
);
BadgeX.displayName = "BadgeX";
export const BadgeXMetadata = { id: "badge-x", baseId: "badge-x", variant: "default", name: "Badge X", category: "badge", tags: [], viewBox: "0 0 24 24" } as const;
export default BadgeX;
