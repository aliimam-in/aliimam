/**
 * Auto-generated logo component: Pilcrow (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PilcrowLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PilcrowLogo = React.forwardRef<SVGSVGElement, PilcrowLogoProps>(
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
      <path d="M13 4v16" />
  <path d="M17 4v16" />
  <path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
    </svg>
  )
);

PilcrowLogo.displayName = "PilcrowLogo";

export const PilcrowLogoMetadata = {
  id: "pilcrow",
  baseId: "pilcrow",
  variant: "default",
  name: "Pilcrow",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PilcrowLogo;
