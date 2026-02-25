/**
 * Auto-generated logo component: Dam (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DamLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DamLogo = React.forwardRef<SVGSVGElement, DamLogoProps>(
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
      <path d="M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  <path d="M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  <path d="M2 10h4" />
  <path d="M2 14h4" />
  <path d="M2 18h4" />
  <path d="M2 6h4" />
  <path d="M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" />
    </svg>
  )
);

DamLogo.displayName = "DamLogo";

export const DamLogoMetadata = {
  id: "dam",
  baseId: "dam",
  variant: "default",
  name: "Dam",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DamLogo;
