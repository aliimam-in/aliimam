/**
 * Auto-generated logo component: Chevron Up (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixChevronUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixChevronUpLogo = React.forwardRef<SVGSVGElement, MixChevronUpLogoProps>(
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
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
);

MixChevronUpLogo.displayName = "MixChevronUpLogo";

export const MixChevronUpLogoMetadata = {
  id: "chevron-up",
  baseId: "chevron-up",
  variant: "default",
  name: "Chevron Up",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixChevronUpLogo;
