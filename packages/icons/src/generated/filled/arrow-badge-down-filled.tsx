/**
 * Auto-generated logo component: Arrow Badge Down Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBadgeDownFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBadgeDownFilledLogo = React.forwardRef<SVGSVGElement, ArrowBadgeDownFilledLogoProps>(
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
      <path d="M16.375 6.22l-4.375 3.498l-4.375 -3.5a1 1 0 0 0 -1.625 .782v6a1 1 0 0 0 .375 .78l5 4a1 1 0 0 0 1.25 0l5 -4a1 1 0 0 0 .375 -.78v-6a1 1 0 0 0 -1.625 -.78z" />
    </svg>
  )
);

ArrowBadgeDownFilledLogo.displayName = "ArrowBadgeDownFilledLogo";

export const ArrowBadgeDownFilledLogoMetadata = {
  id: "arrow-badge-down-filled",
  baseId: "arrow-badge-down-filled",
  variant: "default",
  name: "Arrow Badge Down Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBadgeDownFilledLogo;
