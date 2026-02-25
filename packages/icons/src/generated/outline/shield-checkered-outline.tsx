/**
 * Auto-generated logo component: Shield Checkered Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldCheckeredOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldCheckeredOutlineLogo = React.forwardRef<SVGSVGElement, ShieldCheckeredOutlineLogoProps>(
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
  <path d="M12 3v18" />
  <path d="M3.5 12h17" />
    </svg>
  )
);

ShieldCheckeredOutlineLogo.displayName = "ShieldCheckeredOutlineLogo";

export const ShieldCheckeredOutlineLogoMetadata = {
  id: "shield-checkered-outline",
  baseId: "shield-checkered-outline",
  variant: "default",
  name: "Shield Checkered Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldCheckeredOutlineLogo;
