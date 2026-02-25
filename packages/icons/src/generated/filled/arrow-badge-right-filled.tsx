/**
 * Auto-generated logo component: Arrow Badge Right Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBadgeRightFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBadgeRightFilledLogo = React.forwardRef<SVGSVGElement, ArrowBadgeRightFilledLogoProps>(
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
      <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
    </svg>
  )
);

ArrowBadgeRightFilledLogo.displayName = "ArrowBadgeRightFilledLogo";

export const ArrowBadgeRightFilledLogoMetadata = {
  id: "arrow-badge-right-filled",
  baseId: "arrow-badge-right-filled",
  variant: "default",
  name: "Arrow Badge Right Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBadgeRightFilledLogo;
