/**
 * Auto-generated logo component: Vip Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VipOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VipOffOutlineLogo = React.forwardRef<SVGSVGElement, VipOffOutlineLogoProps>(
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
      <path d="M3 5h2m4 0h12" />
  <path d="M3 19h16" />
  <path d="M4 9l2 6h1l2 -6" />
  <path d="M12 12v3" />
  <path d="M16 12v-3h2a2 2 0 1 1 0 4h-1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

VipOffOutlineLogo.displayName = "VipOffOutlineLogo";

export const VipOffOutlineLogoMetadata = {
  id: "vip-off-outline",
  baseId: "vip-off-outline",
  variant: "default",
  name: "Vip Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VipOffOutlineLogo;
