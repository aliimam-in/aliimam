/**
 * Auto-generated logo component: Wash Dry P Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashDryPOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashDryPOutlineLogo = React.forwardRef<SVGSVGElement, WashDryPOutlineLogoProps>(
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
  <path d="M10 16v-8h2.5a2.5 2.5 0 1 1 0 5h-2.5" />
    </svg>
  )
);

WashDryPOutlineLogo.displayName = "WashDryPOutlineLogo";

export const WashDryPOutlineLogoMetadata = {
  id: "wash-dry-p-outline",
  baseId: "wash-dry-p-outline",
  variant: "default",
  name: "Wash Dry P Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashDryPOutlineLogo;
