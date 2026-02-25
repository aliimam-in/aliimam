/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BadgeInfoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BadgeInfo = React.forwardRef<SVGSVGElement, BadgeInfoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
  <line x1="12" x2="12" y1="16" y2="12" />
  <line x1="12" x2="12.01" y1="8" y2="8" />
    </svg>
  )
);
BadgeInfo.displayName = "BadgeInfo";
export const BadgeInfoMetadata = { id: "badge-info", baseId: "badge-info", variant: "default", name: "Badge Info", category: "badge", tags: [], viewBox: "0 0 24 24" } as const;
export default BadgeInfo;
