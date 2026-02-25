/**
 * Auto-generated logo component: Construction (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ConstructionLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ConstructionLogo = React.forwardRef<SVGSVGElement, ConstructionLogoProps>(
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
      <rect x="2" y="6" width="20" height="8" rx="1" />
  <path d="M17 14v7" />
  <path d="M7 14v7" />
  <path d="M17 3v3" />
  <path d="M7 3v3" />
  <path d="M10 14 2.3 6.3" />
  <path d="m14 6 7.7 7.7" />
  <path d="m8 6 8 8" />
    </svg>
  )
);

ConstructionLogo.displayName = "ConstructionLogo";

export const ConstructionLogoMetadata = {
  id: "construction",
  baseId: "construction",
  variant: "default",
  name: "Construction",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ConstructionLogo;
