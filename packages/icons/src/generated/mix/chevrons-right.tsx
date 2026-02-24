/**
 * Auto-generated logo component: Chevrons Right (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixChevronsRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixChevronsRightLogo = React.forwardRef<SVGSVGElement, MixChevronsRightLogoProps>(
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
      <path d="m6 17 5-5-5-5" />
  <path d="m13 17 5-5-5-5" />
    </svg>
  )
);

MixChevronsRightLogo.displayName = "MixChevronsRightLogo";

export const MixChevronsRightLogoMetadata = {
  id: "chevrons-right",
  baseId: "chevrons-right",
  variant: "default",
  name: "Chevrons Right",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixChevronsRightLogo;
