/**
 * Auto-generated logo component: Bold (default)
 * Category: others
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
      <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
    </svg>
  )
);

BoldLogo.displayName = "BoldLogo";

export const BoldLogoMetadata = {
  id: "bold",
  baseId: "bold",
  variant: "default",
  name: "Bold",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoldLogo;
