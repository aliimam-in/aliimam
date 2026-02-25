/**
 * Auto-generated logo component: Diamond (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DiamondLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DiamondLogo = React.forwardRef<SVGSVGElement, DiamondLogoProps>(
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
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  )
);

DiamondLogo.displayName = "DiamondLogo";

export const DiamondLogoMetadata = {
  id: "diamond",
  baseId: "diamond",
  variant: "default",
  name: "Diamond",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DiamondLogo;
