/**
 * Auto-generated logo component: Melon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MelonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MelonOutlineLogo = React.forwardRef<SVGSVGElement, MelonOutlineLogoProps>(
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
      <path d="M20 10c0 5.523 -4.477 10 -10 10a9.967 9.967 0 0 1 -6.984 -2.842l4.343 -4.153a4 4 0 0 0 5.76 -5.51l4.342 -4.153a9.963 9.963 0 0 1 2.539 6.658" />
    </svg>
  )
);

MelonOutlineLogo.displayName = "MelonOutlineLogo";

export const MelonOutlineLogoMetadata = {
  id: "melon-outline",
  baseId: "melon-outline",
  variant: "default",
  name: "Melon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MelonOutlineLogo;
