/**
 * Auto-generated logo component: Chevrons Left Right (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsLeftRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsLeftRightLogo = React.forwardRef<SVGSVGElement, ChevronsLeftRightLogoProps>(
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
      <path d="m9 7-5 5 5 5" />
  <path d="m15 7 5 5-5 5" />
    </svg>
  )
);

ChevronsLeftRightLogo.displayName = "ChevronsLeftRightLogo";

export const ChevronsLeftRightLogoMetadata = {
  id: "chevrons-left-right",
  baseId: "chevrons-left-right",
  variant: "default",
  name: "Chevrons Left Right",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsLeftRightLogo;
