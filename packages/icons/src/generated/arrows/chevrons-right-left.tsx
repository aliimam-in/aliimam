/**
 * Auto-generated logo component: Chevrons Right Left (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsRightLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsRightLeftLogo = React.forwardRef<SVGSVGElement, ChevronsRightLeftLogoProps>(
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
      <path d="m20 17-5-5 5-5" />
  <path d="m4 17 5-5-5-5" />
    </svg>
  )
);

ChevronsRightLeftLogo.displayName = "ChevronsRightLeftLogo";

export const ChevronsRightLeftLogoMetadata = {
  id: "chevrons-right-left",
  baseId: "chevrons-right-left",
  variant: "default",
  name: "Chevrons Right Left",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsRightLeftLogo;
