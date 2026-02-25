/**
 * Auto-generated logo component: Sword Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwordOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwordOutlineLogo = React.forwardRef<SVGSVGElement, SwordOutlineLogoProps>(
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
      <path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9l5 0" />
  <path d="M6.5 11.5l6 6" />
    </svg>
  )
);

SwordOutlineLogo.displayName = "SwordOutlineLogo";

export const SwordOutlineLogoMetadata = {
  id: "sword-outline",
  baseId: "sword-outline",
  variant: "default",
  name: "Sword Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwordOutlineLogo;
