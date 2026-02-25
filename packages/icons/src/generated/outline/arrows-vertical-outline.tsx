/**
 * Auto-generated logo component: Arrows Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsVerticalOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsVerticalOutlineLogoProps>(
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
      <path d="M8 7l4 -4l4 4" />
  <path d="M8 17l4 4l4 -4" />
  <path d="M12 3l0 18" />
    </svg>
  )
);

ArrowsVerticalOutlineLogo.displayName = "ArrowsVerticalOutlineLogo";

export const ArrowsVerticalOutlineLogoMetadata = {
  id: "arrows-vertical-outline",
  baseId: "arrows-vertical-outline",
  variant: "default",
  name: "Arrows Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsVerticalOutlineLogo;
