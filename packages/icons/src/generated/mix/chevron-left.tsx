/**
 * Auto-generated logo component: Chevron Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixChevronLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixChevronLeftLogo = React.forwardRef<SVGSVGElement, MixChevronLeftLogoProps>(
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

MixChevronLeftLogo.displayName = "MixChevronLeftLogo";

export const MixChevronLeftLogoMetadata = {
  id: "chevron-left",
  baseId: "chevron-left",
  variant: "default",
  name: "Chevron Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixChevronLeftLogo;
