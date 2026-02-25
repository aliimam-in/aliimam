/**
 * Auto-generated logo component: Laptop Minimal Check (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LaptopMinimalCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LaptopMinimalCheckLogo = React.forwardRef<SVGSVGElement, LaptopMinimalCheckLogoProps>(
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
      <path d="M2 20h20" />
  <path d="m9 10 2 2 4-4" />
  <rect x="3" y="4" width="18" height="12" rx="2" />
    </svg>
  )
);

LaptopMinimalCheckLogo.displayName = "LaptopMinimalCheckLogo";

export const LaptopMinimalCheckLogoMetadata = {
  id: "laptop-minimal-check",
  baseId: "laptop-minimal-check",
  variant: "default",
  name: "Laptop Minimal Check",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LaptopMinimalCheckLogo;
