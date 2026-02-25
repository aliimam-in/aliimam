/**
 * Auto-generated logo component: Corner Down Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerDownRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerDownRightOutlineLogo = React.forwardRef<SVGSVGElement, CornerDownRightOutlineLogoProps>(
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
      <path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4" />
    </svg>
  )
);

CornerDownRightOutlineLogo.displayName = "CornerDownRightOutlineLogo";

export const CornerDownRightOutlineLogoMetadata = {
  id: "corner-down-right-outline",
  baseId: "corner-down-right-outline",
  variant: "default",
  name: "Corner Down Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerDownRightOutlineLogo;
