/**
 * Auto-generated logo component: Arrow Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowUpOutlineLogoProps>(
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
      <path d="M12 5l0 14" />
  <path d="M18 11l-6 -6" />
  <path d="M6 11l6 -6" />
    </svg>
  )
);

ArrowUpOutlineLogo.displayName = "ArrowUpOutlineLogo";

export const ArrowUpOutlineLogoMetadata = {
  id: "arrow-up-outline",
  baseId: "arrow-up-outline",
  variant: "default",
  name: "Arrow Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpOutlineLogo;
