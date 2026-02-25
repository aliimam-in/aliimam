/**
 * Auto-generated logo component: Archery Arrow Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArcheryArrowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArcheryArrowOutlineLogo = React.forwardRef<SVGSVGElement, ArcheryArrowOutlineLogoProps>(
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
      <path d="M14 7v3h3l3 -3h-3v-3l-3 3" />
  <path d="M14 10l-9 9" />
  <path d="M5 15v4h4" />
    </svg>
  )
);

ArcheryArrowOutlineLogo.displayName = "ArcheryArrowOutlineLogo";

export const ArcheryArrowOutlineLogoMetadata = {
  id: "archery-arrow-outline",
  baseId: "archery-arrow-outline",
  variant: "default",
  name: "Archery Arrow Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArcheryArrowOutlineLogo;
