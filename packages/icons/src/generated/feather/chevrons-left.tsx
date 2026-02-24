/**
 * Auto-generated logo component: Chevrons Left (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsLeftLogo = React.forwardRef<SVGSVGElement, ChevronsLeftLogoProps>(
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
      <polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/>
    </svg>
  )
);

ChevronsLeftLogo.displayName = "ChevronsLeftLogo";

export const ChevronsLeftLogoMetadata = {
  id: "chevrons-left",
  baseId: "chevrons-left",
  variant: "default",
  name: "Chevrons Left",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsLeftLogo;
