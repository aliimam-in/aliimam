/**
 * Auto-generated logo component: Shield Lock Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldLockOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldLockOutlineLogo = React.forwardRef<SVGSVGElement, ShieldLockOutlineLogoProps>(
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
      <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
  <path d="M11 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 12l0 2.5" />
    </svg>
  )
);

ShieldLockOutlineLogo.displayName = "ShieldLockOutlineLogo";

export const ShieldLockOutlineLogoMetadata = {
  id: "shield-lock-outline",
  baseId: "shield-lock-outline",
  variant: "default",
  name: "Shield Lock Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldLockOutlineLogo;
