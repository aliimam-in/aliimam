/**
 * Auto-generated logo component: Corner Right Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerRightDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerRightDownOutlineLogo = React.forwardRef<SVGSVGElement, CornerRightDownOutlineLogoProps>(
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
      <path d="M6 6h6a3 3 0 0 1 3 3v10l-4 -4m8 0l-4 4" />
    </svg>
  )
);

CornerRightDownOutlineLogo.displayName = "CornerRightDownOutlineLogo";

export const CornerRightDownOutlineLogoMetadata = {
  id: "corner-right-down-outline",
  baseId: "corner-right-down-outline",
  variant: "default",
  name: "Corner Right Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerRightDownOutlineLogo;
