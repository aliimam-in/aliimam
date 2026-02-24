/**
 * Auto-generated logo component: Chevron Down (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronDownLogo = React.forwardRef<SVGSVGElement, ChevronDownLogoProps>(
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
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
);

ChevronDownLogo.displayName = "ChevronDownLogo";

export const ChevronDownLogoMetadata = {
  id: "chevron-down",
  baseId: "chevron-down",
  variant: "default",
  name: "Chevron Down",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronDownLogo;
