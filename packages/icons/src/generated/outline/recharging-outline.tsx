/**
 * Auto-generated logo component: Recharging Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RechargingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RechargingOutlineLogo = React.forwardRef<SVGSVGElement, RechargingOutlineLogoProps>(
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
      <path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" />
  <path d="M3.186 10.209a9 9 0 0 0 0 3.508" />
  <path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" />
  <path d="M10.209 20.814a9 9 0 0 0 3.5 0" />
  <path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" />
  <path d="M20.814 13.791a9 9 0 0 0 0 -3.508" />
  <path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" />
  <path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" />
  <path d="M12 8l-2 4h4l-2 4" />
  <path d="M12 21a9 9 0 0 0 0 -18" />
    </svg>
  )
);

RechargingOutlineLogo.displayName = "RechargingOutlineLogo";

export const RechargingOutlineLogoMetadata = {
  id: "recharging-outline",
  baseId: "recharging-outline",
  variant: "default",
  name: "Recharging Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RechargingOutlineLogo;
