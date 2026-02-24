/**
 * Auto-generated logo component: Feather (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FeatherLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FeatherLogo = React.forwardRef<SVGSVGElement, FeatherLogoProps>(
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
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/>
    </svg>
  )
);

FeatherLogo.displayName = "FeatherLogo";

export const FeatherLogoMetadata = {
  id: "feather",
  baseId: "feather",
  variant: "default",
  name: "Feather",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FeatherLogo;
