/**
 * Auto-generated logo component: Ad Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AdOutlineLogo = React.forwardRef<SVGSVGElement, AdOutlineLogoProps>(
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
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
  <path d="M7 15v-4a2 2 0 0 1 4 0v4" />
  <path d="M7 13l4 0" />
  <path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5" />
    </svg>
  )
);

AdOutlineLogo.displayName = "AdOutlineLogo";

export const AdOutlineLogoMetadata = {
  id: "ad-outline",
  baseId: "ad-outline",
  variant: "default",
  name: "Ad Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AdOutlineLogo;
