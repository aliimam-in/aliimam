/**
 * Auto-generated logo component: Corner Left Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerLeftDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerLeftDownOutlineLogo = React.forwardRef<SVGSVGElement, CornerLeftDownOutlineLogoProps>(
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
      <path d="M18 6h-6a3 3 0 0 0 -3 3v10l-4 -4m8 0l-4 4" />
    </svg>
  )
);

CornerLeftDownOutlineLogo.displayName = "CornerLeftDownOutlineLogo";

export const CornerLeftDownOutlineLogoMetadata = {
  id: "corner-left-down-outline",
  baseId: "corner-left-down-outline",
  variant: "default",
  name: "Corner Left Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerLeftDownOutlineLogo;
