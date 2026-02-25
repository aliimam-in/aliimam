/**
 * Auto-generated logo component: Ham (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HamLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HamLogo = React.forwardRef<SVGSVGElement, HamLogoProps>(
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
      <path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" />
  <path d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" />
  <path d="M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025" />
  <path d="m8.5 16.5-1-1" />
    </svg>
  )
);

HamLogo.displayName = "HamLogo";

export const HamLogoMetadata = {
  id: "ham",
  baseId: "ham",
  variant: "default",
  name: "Ham",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HamLogo;
