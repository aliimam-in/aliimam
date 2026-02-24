/**
 * Auto-generated logo component: Chevrons Right (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsRightLogo = React.forwardRef<SVGSVGElement, ChevronsRightLogoProps>(
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
      <polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/>
    </svg>
  )
);

ChevronsRightLogo.displayName = "ChevronsRightLogo";

export const ChevronsRightLogoMetadata = {
  id: "chevrons-right",
  baseId: "chevrons-right",
  variant: "default",
  name: "Chevrons Right",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsRightLogo;
