/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ProportionsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Proportions = React.forwardRef<SVGSVGElement, ProportionsProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="M12 9v11" />
  <path d="M2 9h13a2 2 0 0 1 2 2v9" />
    </svg>
  )
);
Proportions.displayName = "Proportions";
export const ProportionsMetadata = { id: "proportions", baseId: "proportions", variant: "default", name: "Proportions", category: "layout", tags: [], viewBox: "0 0 24 24" } as const;
export default Proportions;
