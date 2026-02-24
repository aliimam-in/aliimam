/**
 * Auto-generated logo component: Arrow Right (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixArrowRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixArrowRightLogo = React.forwardRef<SVGSVGElement, MixArrowRightLogoProps>(
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
      <path d="M5 12h14" />
  <path d="m12 5 7 7-7 7" />
    </svg>
  )
);

MixArrowRightLogo.displayName = "MixArrowRightLogo";

export const MixArrowRightLogoMetadata = {
  id: "arrow-right",
  baseId: "arrow-right",
  variant: "default",
  name: "Arrow Right",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixArrowRightLogo;
