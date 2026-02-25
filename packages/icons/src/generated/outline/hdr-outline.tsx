/**
 * Auto-generated logo component: Hdr Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HdrOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HdrOutlineLogo = React.forwardRef<SVGSVGElement, HdrOutlineLogoProps>(
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
      <path d="M3 16v-8" />
  <path d="M7 8v8" />
  <path d="M3 12h4" />
  <path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2" />
  <path d="M17 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />
    </svg>
  )
);

HdrOutlineLogo.displayName = "HdrOutlineLogo";

export const HdrOutlineLogoMetadata = {
  id: "hdr-outline",
  baseId: "hdr-outline",
  variant: "default",
  name: "Hdr Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HdrOutlineLogo;
