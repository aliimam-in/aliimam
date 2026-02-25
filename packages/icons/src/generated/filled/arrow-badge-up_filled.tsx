/**
 * Auto-generated logo component: Arrow Badge Up (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBadgeUpFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBadgeUpFilledLogo = React.forwardRef<SVGSVGElement, ArrowBadgeUpFilledLogoProps>(
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
      <path d="M11.375 6.22l-5 4a1 1 0 0 0 -.375 .78v6l.006 .112a1 1 0 0 0 1.619 .669l4.375 -3.501l4.375 3.5a1 1 0 0 0 1.625 -.78v-6a1 1 0 0 0 -.375 -.78l-5 -4a1 1 0 0 0 -1.25 0z" />
    </svg>
  )
);

ArrowBadgeUpFilledLogo.displayName = "ArrowBadgeUpFilledLogo";

export const ArrowBadgeUpFilledLogoMetadata = {
  id: "arrow-badge-up_filled",
  baseId: "arrow-badge-up",
  variant: "filled",
  name: "Arrow Badge Up",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBadgeUpFilledLogo;
