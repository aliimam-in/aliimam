/**
 * Auto-generated logo component: Check (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCheckLogo = React.forwardRef<SVGSVGElement, MixCheckLogoProps>(
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
);

MixCheckLogo.displayName = "MixCheckLogo";

export const MixCheckLogoMetadata = {
  id: "check",
  baseId: "check",
  variant: "default",
  name: "Check",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCheckLogo;
