/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareArrowDownLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareArrowDownLeft = React.forwardRef<SVGSVGElement, SquareArrowDownLeftProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="m16 8-8 8" />
  <path d="M16 16H8V8" />
    </svg>
  )
);
SquareArrowDownLeft.displayName = "SquareArrowDownLeft";
export const SquareArrowDownLeftMetadata = { id: "square-arrow-down-left", baseId: "square-arrow-down-left", variant: "default", name: "Square Arrow Down Left", category: "square", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareArrowDownLeft;
