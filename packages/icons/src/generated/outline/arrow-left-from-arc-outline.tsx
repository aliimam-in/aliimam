/**
 * Auto-generated logo component: Arrow Left From Arc Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLeftFromArcOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftFromArcOutlineLogo = React.forwardRef<SVGSVGElement, ArrowLeftFromArcOutlineLogoProps>(
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
      <path d="M9 12h12" />
  <path d="M17 16l4 -4l-4 -4" />
  <path d="M12 3a9 9 0 1 0 0 18" />
    </svg>
  )
);

ArrowLeftFromArcOutlineLogo.displayName = "ArrowLeftFromArcOutlineLogo";

export const ArrowLeftFromArcOutlineLogoMetadata = {
  id: "arrow-left-from-arc-outline",
  baseId: "arrow-left-from-arc-outline",
  variant: "default",
  name: "Arrow Left From Arc Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLeftFromArcOutlineLogo;
