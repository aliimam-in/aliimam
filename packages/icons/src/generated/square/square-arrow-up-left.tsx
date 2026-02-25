/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareArrowUpLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareArrowUpLeft = React.forwardRef<SVGSVGElement, SquareArrowUpLeftProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M8 16V8h8" />
  <path d="M16 16 8 8" />
    </svg>
  )
);
SquareArrowUpLeft.displayName = "SquareArrowUpLeft";
export const SquareArrowUpLeftMetadata = { id: "square-arrow-up-left", baseId: "square-arrow-up-left", variant: "default", name: "Square Arrow Up Left", category: "square", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareArrowUpLeft;
