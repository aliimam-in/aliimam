/**
 * Auto-generated logo component: Vip Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VipOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VipOutlineLogo = React.forwardRef<SVGSVGElement, VipOutlineLogoProps>(
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
      <path d="M3 5h18" />
  <path d="M3 19h18" />
  <path d="M4 9l2 6h1l2 -6" />
  <path d="M12 9v6" />
  <path d="M16 15v-6h2a2 2 0 1 1 0 4h-2" />
    </svg>
  )
);

VipOutlineLogo.displayName = "VipOutlineLogo";

export const VipOutlineLogoMetadata = {
  id: "vip-outline",
  baseId: "vip-outline",
  variant: "default",
  name: "Vip Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VipOutlineLogo;
