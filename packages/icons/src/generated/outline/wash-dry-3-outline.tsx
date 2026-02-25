/**
 * Auto-generated logo component: Wash Dry 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashDry3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashDry3OutlineLogo = React.forwardRef<SVGSVGElement, WashDry3OutlineLogoProps>(
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
      <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" />
  <path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
  <path d="M12 12h.01" />
  <path d="M9 12h.01" />
  <path d="M15 12h.01" />
    </svg>
  )
);

WashDry3OutlineLogo.displayName = "WashDry3OutlineLogo";

export const WashDry3OutlineLogoMetadata = {
  id: "wash-dry-3-outline",
  baseId: "wash-dry-3-outline",
  variant: "default",
  name: "Wash Dry 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashDry3OutlineLogo;
