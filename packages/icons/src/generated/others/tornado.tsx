/**
 * Auto-generated logo component: Tornado (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TornadoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TornadoLogo = React.forwardRef<SVGSVGElement, TornadoLogoProps>(
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
      <path d="M21 4H3" />
  <path d="M18 8H6" />
  <path d="M19 12H9" />
  <path d="M16 16h-6" />
  <path d="M11 20H9" />
    </svg>
  )
);

TornadoLogo.displayName = "TornadoLogo";

export const TornadoLogoMetadata = {
  id: "tornado",
  baseId: "tornado",
  variant: "default",
  name: "Tornado",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TornadoLogo;
