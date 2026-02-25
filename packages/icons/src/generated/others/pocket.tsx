/**
 * Auto-generated logo component: Pocket (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PocketLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PocketLogo = React.forwardRef<SVGSVGElement, PocketLogoProps>(
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
      <path d="M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z" />
  <path d="m8 10 4 4 4-4" />
    </svg>
  )
);

PocketLogo.displayName = "PocketLogo";

export const PocketLogoMetadata = {
  id: "pocket",
  baseId: "pocket",
  variant: "default",
  name: "Pocket",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PocketLogo;
