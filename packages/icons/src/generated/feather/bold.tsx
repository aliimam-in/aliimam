/**
 * Auto-generated logo component: Bold (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoldLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoldLogo = React.forwardRef<SVGSVGElement, BoldLogoProps>(
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
      <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
    </svg>
  )
);

BoldLogo.displayName = "BoldLogo";

export const BoldLogoMetadata = {
  id: "bold",
  baseId: "bold",
  variant: "default",
  name: "Bold",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoldLogo;
