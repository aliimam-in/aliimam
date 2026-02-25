/**
 * Auto-generated logo component: Pray Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PrayOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PrayOutlineLogo = React.forwardRef<SVGSVGElement, PrayOutlineLogoProps>(
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
      <path d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M7 20h8l-4 -4v-7l4 3l2 -2" />
    </svg>
  )
);

PrayOutlineLogo.displayName = "PrayOutlineLogo";

export const PrayOutlineLogoMetadata = {
  id: "pray-outline",
  baseId: "pray-outline",
  variant: "default",
  name: "Pray Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PrayOutlineLogo;
