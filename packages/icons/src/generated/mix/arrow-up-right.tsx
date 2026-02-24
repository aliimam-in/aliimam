/**
 * Auto-generated logo component: Arrow Up Right (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixArrowUpRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixArrowUpRightLogo = React.forwardRef<SVGSVGElement, MixArrowUpRightLogoProps>(
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
      <path d="M7 7h10v10" />
  <path d="M7 17 17 7" />
    </svg>
  )
);

MixArrowUpRightLogo.displayName = "MixArrowUpRightLogo";

export const MixArrowUpRightLogoMetadata = {
  id: "arrow-up-right",
  baseId: "arrow-up-right",
  variant: "default",
  name: "Arrow Up Right",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixArrowUpRightLogo;
