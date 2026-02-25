/**
 * Auto-generated logo component: Arrow Left To Arc Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLeftToArcOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftToArcOutlineLogo = React.forwardRef<SVGSVGElement, ArrowLeftToArcOutlineLogoProps>(
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
      <path d="M21 12h-12" />
  <path d="M13 16l-4 -4l4 -4" />
  <path d="M12 3a9 9 0 1 0 0 18" />
    </svg>
  )
);

ArrowLeftToArcOutlineLogo.displayName = "ArrowLeftToArcOutlineLogo";

export const ArrowLeftToArcOutlineLogoMetadata = {
  id: "arrow-left-to-arc-outline",
  baseId: "arrow-left-to-arc-outline",
  variant: "default",
  name: "Arrow Left To Arc Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLeftToArcOutlineLogo;
