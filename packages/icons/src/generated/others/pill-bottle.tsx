/**
 * Auto-generated logo component: Pill Bottle (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PillBottleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PillBottleLogo = React.forwardRef<SVGSVGElement, PillBottleLogoProps>(
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
      <path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
  <path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
  <rect width="16" height="5" x="4" y="2" rx="1" />
    </svg>
  )
);

PillBottleLogo.displayName = "PillBottleLogo";

export const PillBottleLogoMetadata = {
  id: "pill-bottle",
  baseId: "pill-bottle",
  variant: "default",
  name: "Pill Bottle",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PillBottleLogo;
