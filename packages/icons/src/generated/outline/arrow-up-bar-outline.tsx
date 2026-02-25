/**
 * Auto-generated logo component: Arrow Up Bar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpBarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpBarOutlineLogo = React.forwardRef<SVGSVGElement, ArrowUpBarOutlineLogoProps>(
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
      <path d="M12 21l0 -18" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M9 21l6 0" />
    </svg>
  )
);

ArrowUpBarOutlineLogo.displayName = "ArrowUpBarOutlineLogo";

export const ArrowUpBarOutlineLogoMetadata = {
  id: "arrow-up-bar-outline",
  baseId: "arrow-up-bar-outline",
  variant: "default",
  name: "Arrow Up Bar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpBarOutlineLogo;
