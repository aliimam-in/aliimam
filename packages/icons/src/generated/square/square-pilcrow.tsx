/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquarePilcrowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquarePilcrow = React.forwardRef<SVGSVGElement, SquarePilcrowProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17" />
  <path d="M12 7v10" />
  <path d="M16 7v10" />
    </svg>
  )
);
SquarePilcrow.displayName = "SquarePilcrow";
export const SquarePilcrowMetadata = { id: "square-pilcrow", baseId: "square-pilcrow", variant: "default", name: "Square Pilcrow", category: "square", tags: [], viewBox: "0 0 24 24" } as const;
export default SquarePilcrow;
