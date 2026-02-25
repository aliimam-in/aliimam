/**
 * Auto-generated logo component: Wash Dry A Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashDryAOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashDryAOutlineLogo = React.forwardRef<SVGSVGElement, WashDryAOutlineLogoProps>(
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
  <path d="M9 16v-4.8c0 -1.657 1.343 -3.2 3 -3.2s3 1.543 3 3.2v4.8" />
  <path d="M15 13h-6" />
    </svg>
  )
);

WashDryAOutlineLogo.displayName = "WashDryAOutlineLogo";

export const WashDryAOutlineLogoMetadata = {
  id: "wash-dry-a-outline",
  baseId: "wash-dry-a-outline",
  variant: "default",
  name: "Wash Dry A Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashDryAOutlineLogo;
