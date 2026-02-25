/**
 * Auto-generated logo component: Chevron Left (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronLeftLogo = React.forwardRef<SVGSVGElement, ChevronLeftLogoProps>(
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
);

ChevronLeftLogo.displayName = "ChevronLeftLogo";

export const ChevronLeftLogoMetadata = {
  id: "chevron-left",
  baseId: "chevron-left",
  variant: "default",
  name: "Chevron Left",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronLeftLogo;
