/**
 * Auto-generated logo component: Arrow Up From Arc Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpFromArcOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpFromArcOutlineLogo = React.forwardRef<SVGSVGElement, ArrowUpFromArcOutlineLogoProps>(
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
      <path d="M12 9v12" />
  <path d="M8 17l4 4l4 -4" />
  <path d="M21 12a9 9 0 0 0 -18 0" />
    </svg>
  )
);

ArrowUpFromArcOutlineLogo.displayName = "ArrowUpFromArcOutlineLogo";

export const ArrowUpFromArcOutlineLogoMetadata = {
  id: "arrow-up-from-arc-outline",
  baseId: "arrow-up-from-arc-outline",
  variant: "default",
  name: "Arrow Up From Arc Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpFromArcOutlineLogo;
