/**
 * Auto-generated logo component: Arrow Down From Arc Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownFromArcOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownFromArcOutlineLogo = React.forwardRef<SVGSVGElement, ArrowDownFromArcOutlineLogoProps>(
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
      <path d="M12 15v-12" />
  <path d="M16 7l-4 -4l-4 4" />
  <path d="M3 12a9 9 0 0 0 18 0" />
    </svg>
  )
);

ArrowDownFromArcOutlineLogo.displayName = "ArrowDownFromArcOutlineLogo";

export const ArrowDownFromArcOutlineLogoMetadata = {
  id: "arrow-down-from-arc-outline",
  baseId: "arrow-down-from-arc-outline",
  variant: "default",
  name: "Arrow Down From Arc Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownFromArcOutlineLogo;
