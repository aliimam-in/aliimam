/**
 * Auto-generated logo component: Medal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MedalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MedalLogo = React.forwardRef<SVGSVGElement, MedalLogoProps>(
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
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
  <path d="M11 12 5.12 2.2" />
  <path d="m13 12 5.88-9.8" />
  <path d="M8 7h8" />
  <circle cx="12" cy="17" r="5" />
  <path d="M12 18v-2h-.5" />
    </svg>
  )
);

MedalLogo.displayName = "MedalLogo";

export const MedalLogoMetadata = {
  id: "medal",
  baseId: "medal",
  variant: "default",
  name: "Medal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MedalLogo;
