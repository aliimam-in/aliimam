/**
 * Auto-generated logo component: Chevrons Down Up (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsDownUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsDownUpLogo = React.forwardRef<SVGSVGElement, ChevronsDownUpLogoProps>(
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
      <path d="m7 20 5-5 5 5" />
  <path d="m7 4 5 5 5-5" />
    </svg>
  )
);

ChevronsDownUpLogo.displayName = "ChevronsDownUpLogo";

export const ChevronsDownUpLogoMetadata = {
  id: "chevrons-down-up",
  baseId: "chevrons-down-up",
  variant: "default",
  name: "Chevrons Down Up",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsDownUpLogo;
