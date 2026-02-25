/**
 * Auto-generated logo component: Chevrons Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsRightOutlineLogo = React.forwardRef<SVGSVGElement, ChevronsRightOutlineLogoProps>(
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
      <path d="M7 7l5 5l-5 5" />
  <path d="M13 7l5 5l-5 5" />
    </svg>
  )
);

ChevronsRightOutlineLogo.displayName = "ChevronsRightOutlineLogo";

export const ChevronsRightOutlineLogoMetadata = {
  id: "chevrons-right-outline",
  baseId: "chevrons-right-outline",
  variant: "default",
  name: "Chevrons Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsRightOutlineLogo;
