/**
 * Auto-generated logo component: Chevron Right (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixChevronRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixChevronRightLogo = React.forwardRef<SVGSVGElement, MixChevronRightLogoProps>(
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
);

MixChevronRightLogo.displayName = "MixChevronRightLogo";

export const MixChevronRightLogoMetadata = {
  id: "chevron-right",
  baseId: "chevron-right",
  variant: "default",
  name: "Chevron Right",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixChevronRightLogo;
