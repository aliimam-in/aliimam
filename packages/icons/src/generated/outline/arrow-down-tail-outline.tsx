/**
 * Auto-generated logo component: Arrow Down Tail Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownTailOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownTailOutlineLogo = React.forwardRef<SVGSVGElement, ArrowDownTailOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 6v15" />
  <path d="M9 18l3 3l3 -3" />
  <path d="M9 3l3 3l3 -3" />
    </svg>
  )
);

ArrowDownTailOutlineLogo.displayName = "ArrowDownTailOutlineLogo";

export const ArrowDownTailOutlineLogoMetadata = {
  id: "arrow-down-tail-outline",
  baseId: "arrow-down-tail-outline",
  variant: "default",
  name: "Arrow Down Tail Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownTailOutlineLogo;
