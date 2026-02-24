/**
 * Auto-generated logo component: Pilcrow Right (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PilcrowRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PilcrowRightLogo = React.forwardRef<SVGSVGElement, PilcrowRightLogoProps>(
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
      <path d="M10 3v11" />
  <path d="M10 9H7a1 1 0 0 1 0-6h8" />
  <path d="M14 3v11" />
  <path d="m18 14 4 4H2" />
  <path d="m22 18-4 4" />
    </svg>
  )
);

PilcrowRightLogo.displayName = "PilcrowRightLogo";

export const PilcrowRightLogoMetadata = {
  id: "pilcrow-right",
  baseId: "pilcrow-right",
  variant: "default",
  name: "Pilcrow Right",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PilcrowRightLogo;
