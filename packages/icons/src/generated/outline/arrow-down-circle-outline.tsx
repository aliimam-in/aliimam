/**
 * Auto-generated logo component: Arrow Down Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownCircleOutlineLogo = React.forwardRef<SVGSVGElement, ArrowDownCircleOutlineLogoProps>(
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
      <path d="M12 7v14" />
  <path d="M9 18l3 3l3 -3" />
  <path d="M12 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" />
    </svg>
  )
);

ArrowDownCircleOutlineLogo.displayName = "ArrowDownCircleOutlineLogo";

export const ArrowDownCircleOutlineLogoMetadata = {
  id: "arrow-down-circle-outline",
  baseId: "arrow-down-circle-outline",
  variant: "default",
  name: "Arrow Down Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownCircleOutlineLogo;
