/**
 * Auto-generated logo component: Arrow Down Right Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownRightCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownRightCircleOutlineLogo = React.forwardRef<SVGSVGElement, ArrowDownRightCircleOutlineLogoProps>(
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
      <path d="M8.464 8.464l9.536 9.536" />
  <path d="M14 18h4v-4" />
  <path d="M8.414 8.414a2 2 0 1 0 -2.828 -2.828a2 2 0 0 0 2.828 2.828" />
    </svg>
  )
);

ArrowDownRightCircleOutlineLogo.displayName = "ArrowDownRightCircleOutlineLogo";

export const ArrowDownRightCircleOutlineLogoMetadata = {
  id: "arrow-down-right-circle-outline",
  baseId: "arrow-down-right-circle-outline",
  variant: "default",
  name: "Arrow Down Right Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownRightCircleOutlineLogo;
