/**
 * Auto-generated logo component: Shield Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldBoltOutlineLogo = React.forwardRef<SVGSVGElement, ShieldBoltOutlineLogoProps>(
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
      <path d="M13.342 20.566c-.436 .17 -.884 .315 -1.342 .434a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .117 6.34" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

ShieldBoltOutlineLogo.displayName = "ShieldBoltOutlineLogo";

export const ShieldBoltOutlineLogoMetadata = {
  id: "shield-bolt-outline",
  baseId: "shield-bolt-outline",
  variant: "default",
  name: "Shield Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldBoltOutlineLogo;
