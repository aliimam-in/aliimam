/**
 * Auto-generated logo component: Corner Down Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerDownLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerDownLeftOutlineLogo = React.forwardRef<SVGSVGElement, CornerDownLeftOutlineLogoProps>(
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
      <path d="M18 6v6a3 3 0 0 1 -3 3h-10l4 -4m0 8l-4 -4" />
    </svg>
  )
);

CornerDownLeftOutlineLogo.displayName = "CornerDownLeftOutlineLogo";

export const CornerDownLeftOutlineLogoMetadata = {
  id: "corner-down-left-outline",
  baseId: "corner-down-left-outline",
  variant: "default",
  name: "Corner Down Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerDownLeftOutlineLogo;
