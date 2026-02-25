/**
 * Auto-generated logo component: Beer (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BeerFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BeerFilledLogo = React.forwardRef<SVGSVGElement, BeerFilledLogoProps>(
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
      <path d="M17 2a2 2 0 0 1 1.995 1.85l.005 .15v4c0 1.335 -.229 2.386 -.774 3.692l-.157 .363l-.31 .701a8.902 8.902 0 0 0 -.751 3.242l-.008 .377v3.625a2 2 0 0 1 -1.85 1.995l-.15 .005h-6a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3.625c0 -1.132 -.21 -2.25 -.617 -3.28l-.142 -.34l-.31 -.699c-.604 -1.358 -.883 -2.41 -.925 -3.698l-.006 -.358v-4a2 2 0 0 1 1.85 -1.995l.15 -.005h10zm0 2h-10v3h10v-3z" />
    </svg>
  )
);

BeerFilledLogo.displayName = "BeerFilledLogo";

export const BeerFilledLogoMetadata = {
  id: "beer_filled",
  baseId: "beer",
  variant: "filled",
  name: "Beer",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BeerFilledLogo;
