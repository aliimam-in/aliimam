/**
 * Auto-generated logo component: Favicon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FaviconOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FaviconOutlineLogo = React.forwardRef<SVGSVGElement, FaviconOutlineLogoProps>(
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
      <path d="M2 8a3 3 0 0 1 3 -3h14a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3l0 -8" />
  <path d="M6 10v4" />
  <path d="M11 10a2 2 0 1 0 0 4" />
  <path d="M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

FaviconOutlineLogo.displayName = "FaviconOutlineLogo";

export const FaviconOutlineLogoMetadata = {
  id: "favicon-outline",
  baseId: "favicon-outline",
  variant: "default",
  name: "Favicon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FaviconOutlineLogo;
