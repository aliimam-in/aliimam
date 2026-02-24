/**
 * Auto-generated logo component: Chevron Right (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronRightLogo = React.forwardRef<SVGSVGElement, ChevronRightLogoProps>(
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
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  )
);

ChevronRightLogo.displayName = "ChevronRightLogo";

export const ChevronRightLogoMetadata = {
  id: "chevron-right",
  baseId: "chevron-right",
  variant: "default",
  name: "Chevron Right",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronRightLogo;
