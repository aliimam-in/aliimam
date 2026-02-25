/**
 * Auto-generated logo component: Arrow Badge Left (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBadgeLeftFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBadgeLeftFilledLogo = React.forwardRef<SVGSVGElement, ArrowBadgeLeftFilledLogoProps>(
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
      <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" />
    </svg>
  )
);

ArrowBadgeLeftFilledLogo.displayName = "ArrowBadgeLeftFilledLogo";

export const ArrowBadgeLeftFilledLogoMetadata = {
  id: "arrow-badge-left_filled",
  baseId: "arrow-badge-left",
  variant: "filled",
  name: "Arrow Badge Left",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBadgeLeftFilledLogo;
