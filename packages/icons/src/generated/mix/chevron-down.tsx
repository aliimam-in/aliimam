/**
 * Auto-generated logo component: Chevron Down (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixChevronDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixChevronDownLogo = React.forwardRef<SVGSVGElement, MixChevronDownLogoProps>(
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
);

MixChevronDownLogo.displayName = "MixChevronDownLogo";

export const MixChevronDownLogoMetadata = {
  id: "chevron-down",
  baseId: "chevron-down",
  variant: "default",
  name: "Chevron Down",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixChevronDownLogo;
