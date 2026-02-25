/**
 * Auto-generated logo component: Circle User Round (default)
 * Category: circle
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleUserRoundLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleUserRoundLogo = React.forwardRef<SVGSVGElement, CircleUserRoundLogoProps>(
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
      <path d="M18 20a6 6 0 0 0-12 0" />
  <circle cx="12" cy="10" r="4" />
  <circle cx="12" cy="12" r="10" />
    </svg>
  )
);

CircleUserRoundLogo.displayName = "CircleUserRoundLogo";

export const CircleUserRoundLogoMetadata = {
  id: "circle-user-round",
  baseId: "circle-user-round",
  variant: "default",
  name: "Circle User Round",
  category: "circle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleUserRoundLogo;
