/**
 * Auto-generated logo component: Package 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Package2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Package2Logo = React.forwardRef<SVGSVGElement, Package2LogoProps>(
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
      <path d="M12 3v6" />
  <path d="M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z" />
  <path d="M3.054 9.013h17.893" />
    </svg>
  )
);

Package2Logo.displayName = "Package2Logo";

export const Package2LogoMetadata = {
  id: "package-2",
  baseId: "package-2",
  variant: "default",
  name: "Package 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Package2Logo;
