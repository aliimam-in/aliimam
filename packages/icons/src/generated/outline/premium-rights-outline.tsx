/**
 * Auto-generated logo component: Premium Rights Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PremiumRightsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PremiumRightsOutlineLogo = React.forwardRef<SVGSVGElement, PremiumRightsOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75" />
  <path d="M12 7v2" />
  <path d="M12 15v2" />
    </svg>
  )
);

PremiumRightsOutlineLogo.displayName = "PremiumRightsOutlineLogo";

export const PremiumRightsOutlineLogoMetadata = {
  id: "premium-rights-outline",
  baseId: "premium-rights-outline",
  variant: "default",
  name: "Premium Rights Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PremiumRightsOutlineLogo;
