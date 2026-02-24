/**
 * Auto-generated logo component: Chevron Up (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronUpLogo = React.forwardRef<SVGSVGElement, ChevronUpLogoProps>(
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
      <polyline points="18 15 12 9 6 15"/>
    </svg>
  )
);

ChevronUpLogo.displayName = "ChevronUpLogo";

export const ChevronUpLogoMetadata = {
  id: "chevron-up",
  baseId: "chevron-up",
  variant: "default",
  name: "Chevron Up",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronUpLogo;
