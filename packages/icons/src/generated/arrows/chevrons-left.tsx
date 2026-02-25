/**
 * Auto-generated logo component: Chevrons Left (default)
 * Category: arrows
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
      <path d="m11 17-5-5 5-5" />
  <path d="m18 17-5-5 5-5" />
    </svg>
  )
);

ChevronsLeftLogo.displayName = "ChevronsLeftLogo";

export const ChevronsLeftLogoMetadata = {
  id: "chevrons-left",
  baseId: "chevrons-left",
  variant: "default",
  name: "Chevrons Left",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsLeftLogo;
