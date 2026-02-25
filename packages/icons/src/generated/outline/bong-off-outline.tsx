/**
 * Auto-generated logo component: Bong Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BongOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BongOffOutlineLogo = React.forwardRef<SVGSVGElement, BongOffOutlineLogoProps>(
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
      <path d="M9 5v-2h4v6m1.5 1.5l2.5 -2.5l2 2l-2.5 2.5m-.5 3.505a5 5 0 1 1 -7 -4.589v-2.416" />
  <path d="M8 3h6" />
  <path d="M6.1 17h9.8" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BongOffOutlineLogo.displayName = "BongOffOutlineLogo";

export const BongOffOutlineLogoMetadata = {
  id: "bong-off-outline",
  baseId: "bong-off-outline",
  variant: "default",
  name: "Bong Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BongOffOutlineLogo;
