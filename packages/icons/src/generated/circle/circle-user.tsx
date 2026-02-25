/**
 * Auto-generated logo component: Circle User (default)
 * Category: circle
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleUserLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleUserLogo = React.forwardRef<SVGSVGElement, CircleUserLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="10" r="3" />
  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  )
);

CircleUserLogo.displayName = "CircleUserLogo";

export const CircleUserLogoMetadata = {
  id: "circle-user",
  baseId: "circle-user",
  variant: "default",
  name: "Circle User",
  category: "circle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleUserLogo;
