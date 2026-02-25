/**
 * Auto-generated logo component: Bell Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BellBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BellBoltOutlineLogo = React.forwardRef<SVGSVGElement, BellBoltOutlineLogoProps>(
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
      <path d="M13.5 17h-9.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1" />
  <path d="M9 17v1a3 3 0 0 0 4.368 2.67" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

BellBoltOutlineLogo.displayName = "BellBoltOutlineLogo";

export const BellBoltOutlineLogoMetadata = {
  id: "bell-bolt-outline",
  baseId: "bell-bolt-outline",
  variant: "default",
  name: "Bell Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BellBoltOutlineLogo;
