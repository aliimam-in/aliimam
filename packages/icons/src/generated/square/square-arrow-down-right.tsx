/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareArrowDownRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareArrowDownRight = React.forwardRef<SVGSVGElement, SquareArrowDownRightProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="m8 8 8 8" />
  <path d="M16 8v8H8" />
    </svg>
  )
);
SquareArrowDownRight.displayName = "SquareArrowDownRight";
export const SquareArrowDownRightMetadata = { id: "square-arrow-down-right", baseId: "square-arrow-down-right", variant: "default", name: "Square Arrow Down Right", category: "square", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareArrowDownRight;
