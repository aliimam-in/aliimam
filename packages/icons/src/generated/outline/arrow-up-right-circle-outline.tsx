/**
 * Auto-generated logo component: Arrow Up Right Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpRightCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpRightCircleOutlineLogo = React.forwardRef<SVGSVGElement, ArrowUpRightCircleOutlineLogoProps>(
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
      <path d="M8.464 15.536l9.536 -9.536" />
  <path d="M18 10v-4h-4" />
  <path d="M8.414 15.586a2 2 0 1 0 -2.828 2.828a2 2 0 0 0 2.828 -2.828" />
    </svg>
  )
);

ArrowUpRightCircleOutlineLogo.displayName = "ArrowUpRightCircleOutlineLogo";

export const ArrowUpRightCircleOutlineLogoMetadata = {
  id: "arrow-up-right-circle-outline",
  baseId: "arrow-up-right-circle-outline",
  variant: "default",
  name: "Arrow Up Right Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpRightCircleOutlineLogo;
