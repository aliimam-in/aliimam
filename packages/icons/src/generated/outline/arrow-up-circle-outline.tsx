/**
 * Auto-generated logo component: Arrow Up Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpCircleOutlineLogo = React.forwardRef<SVGSVGElement, ArrowUpCircleOutlineLogoProps>(
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
      <path d="M12 17v-14" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M12 17a2 2 0 1 0 0 4a2 2 0 0 0 0 -4" />
    </svg>
  )
);

ArrowUpCircleOutlineLogo.displayName = "ArrowUpCircleOutlineLogo";

export const ArrowUpCircleOutlineLogoMetadata = {
  id: "arrow-up-circle-outline",
  baseId: "arrow-up-circle-outline",
  variant: "default",
  name: "Arrow Up Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpCircleOutlineLogo;
