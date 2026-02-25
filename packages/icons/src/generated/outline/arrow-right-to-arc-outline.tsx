/**
 * Auto-generated logo component: Arrow Right To Arc Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRightToArcOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRightToArcOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRightToArcOutlineLogoProps>(
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
      <path d="M3 12h12" />
  <path d="M11 8l4 4l-4 4" />
  <path d="M12 21a9 9 0 0 0 0 -18" />
    </svg>
  )
);

ArrowRightToArcOutlineLogo.displayName = "ArrowRightToArcOutlineLogo";

export const ArrowRightToArcOutlineLogoMetadata = {
  id: "arrow-right-to-arc-outline",
  baseId: "arrow-right-to-arc-outline",
  variant: "default",
  name: "Arrow Right To Arc Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRightToArcOutlineLogo;
